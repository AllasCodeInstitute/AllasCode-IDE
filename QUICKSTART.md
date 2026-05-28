# Quick Start (compilar e rodar)

Este guia resolve o cenário mais comum de erro de versão/dependência e unifica tudo em **um comando**.

## Pré-requisitos

- **Git**
- **Node.js** (recomendado: versão LTS atual)
- **npm** (vem com Node)
- Linux/macOS com shell `bash` (o script abaixo usa `./scripts/code.sh`)

> Se você estiver no Windows puro, rode via WSL ou adapte para `scripts/code.bat`.

## Passo único

Na raiz do projeto:

```bash
npm run quickstart
```

Esse script executa automaticamente:

1. `npm install` (instala dependências)
2. `npm run compile` (compila o projeto)
3. `./scripts/code.sh` (abre/roda o Code - OSS)

## Quando der erro de versão/dependência

Tente este reset limpo:

```bash
rm -rf node_modules
npm cache verify
npm install
npm run compile
```

Depois rode novamente:

```bash
npm run quickstart
```

## Dicas rápidas

- Primeira compilação pode demorar bastante.
- Se faltar memória, feche apps pesados e tente novamente.
- Em ambiente de container, prefira abrir este repositório no dev container já configurado.
