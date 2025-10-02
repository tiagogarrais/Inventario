# 📋 Guia do Usuário - Sistema de Inventário

**Versão 2.1.1 | Para Membros de Comissões Inventariantes**

---

## Como é o Sistema?

<details>
<summary><strong>🖼️ Clique aqui para ver as telas do sistema</strong></summary>

**Não se preocupe! O sistema é bem simples e intuitivo. Veja como são as telas:**

|                                         Tela Inicial                                          |                                      Lista de inventários                                      |                                     Criar novo inventário                                      |
| :-------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| ![Interface](https://github.com/tiagogarrais/inventario-tiago/raw/master/public/Telas/01.jpg) | ![Inventário](https://github.com/tiagogarrais/inventario-tiago/raw/master/public/Telas/02.jpg) | ![Relatórios](https://github.com/tiagogarrais/inventario-tiago/raw/master/public/Telas/03.jpg) |

_As telas são simples e fáceis de usar!_

</details>

---

## 👋 Bem-vindo ao Sistema de Inventário!

Este guia foi criado especialmente para **você que faz parte de uma comissão inventariante** e vai usar nosso sistema para realizar o inventário dos bens patrimoniais. Não se preocupe se você não é da área de informática - este guia explica tudo de forma simples e prática!

## 🎯 O que é o Sistema de Inventário?

É uma ferramenta online que ajuda você a:

- ✅ **Conferir** se os bens estão onde deveriam estar
- ✅ **Registrar** novos bens encontrados
- ✅ **Atualizar** informações dos bens (estado, localização)
- ✅ **Corrigir** dados de bens já inventariados (NOVO v2.1.0!)
- ✅ **Visualizar histórico** de todas as correções realizadas
- ✅ **Gerar relatórios** organizados por sala com indicadores visuais
- ✅ **Trabalhar em equipe** com outros membros da comissão

## 🚀 Como Começar

### 1️⃣ **Fazendo Login**

1. Acesse o link https://inventario-tiago.vercel.app
2. Clique em **"Entrar com Google"**
3. Use sua conta do Gmail
4. Pronto! Você está dentro do sistema

> 💡 **Dica**: Use sempre a mesma conta do Gmail para manter seu histórico

### 🧪 **Quer Testar Primeiro?**

Se você é responsável por criar o inventário, pode baixar um arquivo de exemplo:

1. **Na página inicial** (antes de fazer login), procure por "Teste o Sistema"
2. **Clique em "Baixar Exemplo JSON"**
3. **Faça login** no sistema
4. **Use o arquivo baixado** para testar o upload
5. **Explore** todas as funcionalidades com dados fictícios!

> 📁 **O arquivo de exemplo** contém dados fictícios que simulam um inventário real

### 2️⃣ **Acessando um Inventário**

Depois de fazer login, você verá:

- **Lista de inventários** disponíveis para você
- **Clique no nome** do inventário que deseja trabalhar
- **Aguarde carregar** - pode demorar alguns segundos

## 📱 Como Fazer o Inventário

### 🔍 **Procurando um Item**

1. **Digite o número do tombo** no campo de pesquisa
   - Exemplo: `12345`
   - Use apenas números, sem espaços
2. **Pressione Enter** ou clique em "Confirmar"

3. **O sistema vai mostrar**:
   - ✅ **Verde**: Item encontrado no sistema
   - ❌ **Vermelho**: "Item não encontrado"

### ✅ **Quando o Item FOI ENCONTRADO**

O sistema mostra as informações do item. Agora você precisa:

1. **Verificar se as informações estão corretas**:
   - Descrição do item
   - Estado de conservação
   - Localização atual

2. **Escolher o status atual**:
   - `Em Uso` - Item está sendo usado normalmente
   - `Ocioso` - Item não está sendo usado
   - `Em Manutenção` - Item está quebrado/em conserto

3. **Confirmar se a sala está certa**:
   - Se o item não está na sala indicada, o sistema vai perguntar
   - Confirme se pode alterar a localização

4. **Clicar em "Confirmar Item Encontrado"**

> ✅ **Pronto!** Item inventariado com sucesso!

### ❌ **Quando o Item NÃO FOI ENCONTRADO**

- Clique em **"Cadastrar item"**
- Preencha as informações (explicado abaixo)

### 📝 **Cadastrando um Novo Item**

Quando clicar em "Cadastrar item", abrirá um formulário:

**Campos obrigatórios** (já vêm preenchidos):

- ✅ **Número do tombo** - Já preenchido automaticamente
- ✅ **Sala** - Já preenchida com a sala que você está inventariando
- ✅ **Data do inventário** - Preenchida automaticamente
- ✅ **Seu nome** - Preenchido automaticamente

**Campos que VOCÊ precisa preencher:**

- 📝 **Descrição**: Ex: "Mesa de escritório", "Computador Dell", "Cadeira giratória"
- 📝 **Estado de Conservação**: Escolha entre:
  - `Bom` - Item em perfeitas condições
  - `Regular` - Item com pequenos desgastes
  - `Ocioso` - Item parado, sem uso
  - `Recuperável` - Item com defeito, mas pode ser consertado
  - `Antieconômico` - Item muito danificado
- 📝 **Status**: Escolha entre "Em Uso", "Ocioso", etc.
- 📝 **Outros campos**: Preencha o que souber (marca, modelo, etc.)

**Dica importante:** 🔖 Itens cadastrados por você ganham uma **marcação especial azul** nos relatórios!

## 🏢 Organizando por Salas

### 📍 **Selecionando a Sala**

No topo da página, você vê um menu suspenso com as salas.

- **Selecione a sala** onde você está fazendo o inventário
- **Todos os itens** que você registrar serão associados a esta sala
- **Lembre-se de trocar** quando mudar de sala!

### 🚶‍♀️ **Mudando de Sala**

Quando terminar uma sala:

1. **Selecione a nova sala** no menu suspenso
2. **Continue** digitando os números dos tombos
3. **O sistema automaticamente** associa à nova sala

## 📊 Visualizando Relatórios

### 📈 **Acessando o Relatório**

1. Na página do inventário, procure por **"Ver Relatório"** ou similar
2. **Ou** substitua `/inventario/nome-do-inventario` por `/relatorio/nome-do-inventario` na URL

### 📋 **Entendendo o Relatório**

O relatório mostra **todas as salas** organizadamente:

**🟢 Itens Inventariados (fundo verde):**

- Item foi conferido e está OK
- Mostra quem fez o inventário e quando

**🔴 Itens Não Inventariados (fundo vermelho):**

- Item ainda não foi conferido
- Precisa ser localizado e inventariado

**🔵 Itens Cadastrados (borda azul + badge):**

- Item foi cadastrado durante o inventário
- Tem uma marcação especial "📝 CADASTRADO"

**� Itens Corrigidos (badge laranja):**

- Item teve informações corrigidas após o inventário
- Mostra badge "📋 CORRIGIDO"
- Clique no número do tombo para ver histórico de correções

**�📦 Salas Vazias:**

- Salas que não têm nenhum item
- Aparecem com mensagem "Nenhum item encontrado"

### 🎨 **Entendendo os Badges Coloridos**

Os itens podem ter diferentes badges que indicam seu status:

- 🟢 **INVENTARIADO** - Item foi confirmado durante o inventário
- 🟠 **CORRIGIDO** - Item teve dados corrigidos posteriormente
- 🔵 **CADASTRADO** - Item foi adicionado durante o inventário

**💡 Dica**: Um item pode ter múltiplos badges se foi cadastrado E corrigido, por exemplo!

## 🔧 Corrigindo Dados de Itens (NOVO v2.1.0!)

### 📝 **Quando Usar Correções**

Às vezes você percebe que um item já inventariado tem informações incorretas ou incompletas. Agora você pode corrigir!

**Exemplos de quando corrigir:**

- Descrição está incompleta ou errada
- Estado de conservação mudou
- Sala foi preenchida incorretamente
- Marca/modelo estava errado
- Qualquer outro dado que precisa ser atualizado

### ✏️ **Como Fazer uma Correção**

1. **Encontre o item** no inventário (digite o número do tombo)
2. **O sistema mostra** as informações atuais do item
3. **Modifique os campos** que estão incorretos
4. **Adicione uma observação** explicando o motivo da correção
5. **Clique em "Salvar Correção"**

**✅ Pronto!** O item agora terá:

- As informações atualizadas
- Um badge laranja "📋 CORRIGIDO"
- Histórico completo das mudanças

### 📚 **Visualizando Histórico de Correções**

**No Inventário:**

- Itens corrigidos aparecem com badge laranja
- Clique no número do tombo para ver detalhes

**No Relatório:**

- Badge "📋 CORRIGIDO" aparece nos itens
- Clique no número para ver histórico completo
- Mostra TODAS as correções em ordem cronológica

### 🕰️ **O que Fica Registrado**

Cada correção salva:

- **Quem fez** a correção (seu nome)
- **Quando** foi feita (data e hora)
- **O que mudou** (quais campos foram alterados)
- **Observações** que você escreveu
- **Valores anteriores e novos** de cada campo

**🔒 Importante**: As correções NÃO apagam o histórico anterior - tudo fica registrado!

## 🤝 Trabalhando em Equipe

### 👥 **Vários Membros da Comissão**

- **Cada pessoa** usa sua própria conta do Gmail
- **Todas podem trabalhar** no mesmo inventário simultaneamente
- **O sistema registra** quem fez cada inventário
- **Não há conflitos** - cada pessoa pode trabalhar em salas diferentes

### 📱 **Usando em Dispositivos Móveis**

- **Funciona em celulares e tablets**
- **Use o navegador** (Chrome, Firefox, Safari)
- **Digite os tombos** normalmente
- **Interface se adapta** ao tamanho da tela

## 🔧 Problemas Comuns e Soluções

### ❓ **"Não consigo fazer login"**

- Verifique se está usando a conta Gmail certa
- Peça ao administrador para conceder acesso
- Tente fazer logout e login novamente

### ❓ **"Item não aparece quando digito o tombo"**

- Verifique se digitou o número correto
- Tente sem espaços ou caracteres especiais
- Se tem certeza que existe, cadastre como novo item

### ❓ **"Como faço para corrigir um item já inventariado?"**

- Digite o tombo do item no campo de busca
- Modifique os campos que estão errados
- Adicione uma observação explicando a correção
- Clique em "Salvar Correção"

### ❓ **"Onde vejo o histórico de correções?"**

- No inventário: clique no número do tombo de itens com badge laranja
- No relatório: clique no número do item corrigido
- Abre uma página com todas as correções em ordem cronológica

### ❓ **"Posso corrigir itens que outras pessoas inventariaram?"**

- Sim! Qualquer membro da equipe pode fazer correções
- O sistema registra quem fez cada correção
- Ideal para trabalho colaborativo

### ❓ **"Não consigo acessar o inventário"**

- Verifique se o administrador deu permissão para você
- Confirme se está usando a conta Gmail correta
- Entre em contato com o responsável pelo sistema

### ❓ **"O sistema está lento"**

- É normal, o sistema processa muitos dados
- Aguarde alguns segundos depois de cada ação
- Evite clicar várias vezes no mesmo botão

### ❓ **"Não sei qual estado de conservação escolher"**

- **Bom**: Item sem nenhum problema visível
- **Regular**: Item com riscos ou desgaste normal do uso
- **Ocioso**: Item guardado, não sendo usado
- **Recuperável**: Item com problema, mas vale a pena consertar
- **Antieconômico**: Item muito danificado, não vale consertar

## 📞 Precisa de Ajuda?

Se tiver qualquer dúvida ou problema:

1. **Primeiro**: Releia este guia
2. **Segundo**: Pergunte para outros membros da comissão
3. **Terceiro**: Entre em contato com o responsável pelo sistema

**Lembre-se**: Este sistema foi feito para facilitar sua vida! Com um pouco de prática, você vai ficar expert em fazer inventários! 💪

---

## 📝 Resumo Rápido - Passo a Passo

1. **Login** → Conta do Gmail
2. **Escolher inventário** → Clicar no nome
3. **Selecionar sala** → Menu suspenso no topo
4. **Digitar tombo** → Número no campo de busca
5. **Se encontrou** → Confirmar informações → "Confirmar Item Encontrado"
6. **Se não encontrou** → "Cadastrar item" → Preencher dados → "Enviar"
7. **Para corrigir** → Digitar tombo → Modificar dados → "Salvar Correção"
8. **Trocar de sala** → Selecionar nova sala no menu
9. **Ver progresso** → Acessar relatório do inventário
10. **Ver correções** → Clicar nos badges laranjas ou números dos itens

---

**🎯 Pronto! Agora você está preparado para fazer um inventário eficiente e organizado!**

_Sistema de Inventário v2.1.1 - Criado para facilitar o trabalho das comissões inventariantes_ 📋✨
