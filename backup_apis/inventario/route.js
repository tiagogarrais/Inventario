import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import {
  InventarioService,
  ItemInventarioService,
  PermissaoService,
  AuditoriaService,
} from "../../../lib/services.js";

export async function GET(request) {
  // Verificar autenticação
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: "Acesso negado. Usuário não autenticado." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const nomeInventario = searchParams.get("inventario");
  const tombo = searchParams.get("tombo");

  if (!nomeInventario) {
    return NextResponse.json(
      { error: "Parâmetro 'inventario' é obrigatório." },
      { status: 400 }
    );
  }

  try {
    // Buscar inventário no banco de dados
    const inventario = await InventarioService.findByName(nomeInventario);

    if (!inventario) {
      return NextResponse.json(
        { error: "Inventário não encontrado." },
        { status: 404 }
      );
    }

    // Verificar permissões de acesso ao inventário
    const hasAccess = await PermissaoService.canAccessInventario(
      session.user.email,
      inventario.nome
    );

    if (!hasAccess) {
      return NextResponse.json(
        {
          error:
            "Acesso negado. Você não tem permissão para acessar este inventário.",
        },
        { status: 403 }
      );
    }

    // Se foi solicitado um tombo específico, buscar apenas esse item
    if (tombo) {
      console.log(
        `🔍 Buscando item com tombo: ${tombo} no inventário: ${nomeInventario}`
      );

      const item = await ItemInventarioService.findByNumero(
        nomeInventario,
        tombo
      );

      if (!item) {
        console.log(
          `❌ Item com tombo ${tombo} não encontrado no inventário ${nomeInventario}`
        );
        return NextResponse.json(
          { error: "Item não encontrado." },
          { status: 404 }
        );
      }

      console.log(`✅ Item encontrado:`, item);

      // Registrar acesso ao item no log de auditoria
      await AuditoriaService.log(
        "search_item",
        session.user,
        { tombo: tombo },
        inventario.nome
      );

      return NextResponse.json(item);
    }

    // Retornar todos os itens do inventário
    const itens = await ItemInventarioService.listByInventario(inventario.nome);

    // Registrar acesso ao inventário no log de auditoria
    await AuditoriaService.log(
      "view_inventory",
      session.user,
      { total_items: itens.length },
      inventario.nome
    );

    return NextResponse.json(itens);
  } catch (error) {
    console.error("Erro ao buscar inventário:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
