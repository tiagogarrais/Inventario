"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

export default function RelatoriosPage({ params }) {
  const [nome, setNome] = useState("");

  useEffect(() => {
    // Resolver params de forma assíncrona
    const resolveParams = async () => {
      const resolvedParams = await params;
      setNome(resolvedParams.nome);
    };
    resolveParams();
  }, [params]);

  const { data: session, status } = useSession();
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);
  const [accessLoading, setAccessLoading] = useState(true);

  // Verificar permissões de acesso
  useEffect(() => {
    async function verificarPermissoes() {
      if (status === "loading") return;

      if (status === "unauthenticated") {
        router.push("/");
        return;
      }

      try {
        const response = await fetch(
          `/api/verificar-acesso?inventario=${nome}`
        );
        const data = await response.json();

        if (response.ok) {
          setHasAccess(data.hasAccess);
        } else {
          setHasAccess(false);
        }
      } catch (error) {
        console.error("Erro ao verificar permissões:", error);
        setHasAccess(false);
      }

      setAccessLoading(false);
    }

    verificarPermissoes();
  }, [nome, status, router]);

  // Loading de autenticação
  if (status === "loading" || accessLoading) {
    return (
      <div>
        <div>Verificando permissões...</div>
      </div>
    );
  }

  // Usuário não autenticado
  if (status === "unauthenticated") {
    return (
      <div>
        <h1>Acesso Restrito</h1>
        <p>Você precisa estar autenticado para acessar relatórios.</p>
      </div>
    );
  }

  // Usuário não tem acesso ao inventário
  if (!hasAccess) {
    return (
      <div>
        <h1>Acesso Negado</h1>
        <p>
          Você não tem permissão para acessar os relatórios deste inventário.
        </p>
        <p>
          Entre em contato com o proprietário do inventário para solicitar
          acesso.
        </p>
        <Button onClick={() => router.push("/")}>Voltar ao Início</Button>
      </div>
    );
  }

  return (
    <div>
      {/* Cabeçalho */}
      <div>
        <h1>
          Relatórios do Inventário:{" "}
          <a
            href={`/inventario/${nome}`}
            style={{
              color: "#007bff",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
            }}
            title="Clique para voltar ao inventário"
          >
            {nome}
          </a>
        </h1>
      </div>

      {/* Lista de Relatórios Disponíveis */}
      <div>
        {/* Dashboard */}
        <Button onClick={() => router.push(`/inventario/${nome}/dashboard`)}>
          📊 Dashboard
        </Button>
        {/* Relatório Geral */}
        <Button onClick={() => router.push(`/relatorio/${nome}`)}>
          Relatório Geral
        </Button>
        {/* Relatório de Itens Movidos */}
        <Button
          onClick={() => router.push(`/relatorios/${nome}/itens-movidos`)}
        >
          🚚 Itens Movidos
        </Button>
        <hr />
      </div>

      {/* Rodapé informativo */}
      <div>
        <p>
          <strong>Dica:</strong> Novos tipos de relatórios serão adicionados em
          breve para oferecer diferentes visões dos dados do inventário.
        </p>
      </div>
    </div>
  );
}
