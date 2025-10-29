import chalk from "chalk";

const title = chalk.yellow.bold;
const subtitle = chalk.yellow;
const error = chalk.red.italic;

export const QRCodePrompt = [
  {
    name: "link",
    description:
      title("Digite o link para gerar o QRCode") + subtitle("\n\nLink"),
    required: true,
  },
  {
    name: "type",
    description:
      title("Escolha o tipo de QRCode\n\n[1] - IMAGEM\n[2] - TERMINAL") +
      subtitle("\n\nDigite a opção desejada"),
    pattern: /^[1-2]+$/,
    message: error("Escolha apenas entre 1 e 2\n"),
    required: true,
  },
];
