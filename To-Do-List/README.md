# ⚔️ Nossas Quests de Hoje (RPG To-Do List)

Bem-vindo à Taverna! Este é um projeto de Lista de Tarefas (To-Do List) totalmente imersivo, com temática de RPG medieval. 

Este projeto foi desenvolvido com o propósito principal de **testar e consolidar minhas habilidades de integração entre as bases do Front-end**. O foco não foi apenas criar uma interface estática, mas sim fazer o HTML, o CSS e o JavaScript conversarem, gerenciando estados e dados dinâmicos no navegador.

## 🎯 O que eu construí (Funcionalidades)
- **Criação de Quests:** Criação de novas tarefas dinamicamente na interface.
- **Sistema de Exclusão:** Botões dinâmicos gerados via JavaScript para finalizar e apagar missões/Tasks.
- **Persistência de Dados (O Memory Card):** Integração com o `localStorage` da API do navegador. Se você atualizar a página ou fechar o navegador, suas Tasks continuam salvas!
- **Feedback Visual:** Uso de eventos de teclado (Enter) e cliques para uma experiência de usuário mais fluida, juntamente com respostas visuais à cada clique.

## 🛠️ Tecnologias e Conceitos Aplicados

Nesta jornada, equipei as seguintes ferramentas:

* **HTML5:** 
  * Semântica estrutural e injeção de tags dinâmicas via `innerHTML`.
* **CSS3:** 
  * Uso de *Custom Properties* (Variáveis) para paleta de cores.
  * *Flexbox* para alinhamento e layout responsivo.
  * *Transitions* e *Hover states* para botões interativos.
  * Importação de fontes externas (Google Fonts).
  * Ajuste fino de imagens com `transform`.
* **JavaScript (Vanilla):**
  * Manipulação avançada da DOM (`querySelector`, `createElement`, `appendChild`).
  * *Event Listeners* (`click`, `keypress`).
  * Lógica de repetição (*Loops*) e Arrays.
  * Conversão de dados com `JSON.stringify` e `JSON.parse`.
  * Criação dinâmica de elementos e textos através do `innerHTML`.

## 🚀 Como inspecionar este projeto

Para executar este projeto, faça:

1. Clone este repositório no seu terminal:
   ```bash
   git clone [https://github.com/SeuUsuario/task-list.git](https://github.com/SeuUsuario/task-list.git)
   ```

2. Copie o `Path` do arquivo `index.html` e cole no seu navegador, ou utilize a extensão Live Server do VS Code para uma experiência mais dinâmica.