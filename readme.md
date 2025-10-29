# QRCode / Password / CPF

Projeto de estudo em Node.js para gerar QR Codes (no terminal), gerar senhas aleatórias e CPFs válidos.

## Pré-requisitos
- Node.js 
- npm ou yarn

## Funcionalidades
- Gerar QR Code a partir de um link (exibido no terminal).
- Gerar senhas configuráveis via variáveis de ambiente.
- Gerar CPF válido aleatório.

## Variáveis de ambiente (opções para o gerador de senhas)
Coloque essas variáveis no `.env` (opcional) para controlar o comportamento do gerador de senhas:

```
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=false
```

- `PASSWORD_LENGTH`: número de caracteres da senha (ex.: 12)
- `UPPERCASE_LETTERS`, `LOWERCASE_LETTERS`, `NUMBERS`, `SPECIAL_CHARACTERS`: marque `true` ou `false` para permitir conjuntos de caracteres

## Como usar
O projeto é interativo via terminal. Existem duas formas comuns de executar:

- Usando o script de desenvolvimento (recomenda-se):

	npm run dev

- Ou executando diretamente o arquivo principal:

	node src/index.js

Ao executar, o aplicativo exibirá um menu com três opções:

[1] - QRCODE
[2] - PASSWORD
[3] - CPF

- QRCODE: escolha `1` e digite o link (URL). O QR Code será gerado e exibido no terminal (usando `qrcode-terminal`).
- PASSWORD: escolha `2`. A senha será gerada usando as variáveis de ambiente acima (se não definidas, ajuste `.env`).
- CPF: escolha `3`. Um CPF válido será gerado e exibido.

Exemplo rápido (gerar um QR Code):

1. Rode `npm run dev` ou `node src/index.js`.
2. Digite `1` e pressione Enter.
3. Insira o link desejado (ex.: `https://example.com`) e pressione Enter.

## Estrutura do projeto

```
src/
	index.js             # entrada principal (menu interativo)
	reload.js            # lógica de reinício/interação
	prompts/             # schemas de prompt usados por `prompt`
	services/
		qr-code/           # criação e handling do QR Code
		password/          # geração de senha
		cpf/               # geração de CPF
	utils/
		chalk.js           # helpers de formatação no terminal
package.json
readme.md
```

## Observações
- O gerador de senhas busca conjuntos de caracteres baseado nas variáveis de ambiente. Se nenhum conjunto for ativado, a senha poderá ficar vazia — ajuste o `.env` conforme necessário.
- O QR Code é exibido no terminal (ASCII) para uso rápido; se quiser salvar como imagem, é possível adaptar o serviço para usar bibliotecas que gerem arquivos (por exemplo, `qrcode` que gera PNG/SVG).
