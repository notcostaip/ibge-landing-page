# Projeto Landing Page - IBGE

Este projeto consiste em uma Landing Page de alta conversão para a venda de um curso preparatório para o concurso do IBGE ("Preparação Estratégica").

## Visão Geral

A página foi construída com foco em:
- **Design Moderno e Responsivo**: Adaptável a dispositivos móveis e desktops, com tema escuro e elementos de "Glassmorphism".
- **Alta Performance**: Uso de CSS e JavaScript otimizados para carregamento rápido.
- **Animações**: Efeitos visuais suaves, partículas de fundo e transições de entrada (detalhes técnicos em `EFEITOS_VISUAIS.md`).
- **Segurança**: Scripts de proteção contra cópia de conteúdo (`protection.js`).

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização avançada, variáveis CSS, Flexbox/Grid e Media Queries.
- **JavaScript (Vanilla)**: Funcionalidades interativas como FAQ, efeitos de scroll e partículas.
- **Bibliotecas**: Nenhuma dependência pesada (jQuery, Bootstrap, etc.) foi utilizada, garantindo leveza.

## Estrutura de Arquivos

- `index.html`: Página principal de vendas.
- `style.css`: Estilos globais e da versão desktop.
- `mobile-animations.css`: Ajustes finos e animações específicas para mobile.
- `script.js`: Lógica principal (partículas, acordeão, scroll suave).
- `protection.js`: Script de segurança (impede clique direito, seleção de texto, etc.).
- `upsell/`: Pasta contendo as páginas de oferta adicional (Upsell, Downsell e Obrigado).
  - `upsell/index.html`: Página de Upsell.
  - `upsell/downsell.html` & `downsell2.html`: Páginas de Downsell.
  - `upsell/obrigado.html`: Página de agradecimento/confirmação.

## Como Executar

Basta abrir o arquivo `index.html` em qualquer navegador web moderno. Não é necessário instalação de servidores ou dependências (Node.js, etc), a menos que deseje servir via HTTP localmente.

## Design e Efeitos

Para uma explicação detalhada sobre as escolhas de design, paleta de cores e implementação técnica dos efeitos visuais, consulte o arquivo [EFEITOS_VISUAIS.md](./EFEITOS_VISUAIS.md).

## Contato

Para mais informações sobre o projeto, entre em contato com a equipe de desenvolvimento.

https://instagram.com/notcostaip
