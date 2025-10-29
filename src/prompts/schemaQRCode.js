import chalk from "chalk";

const title = chalk.yellow.bold;
const subtitle = chalk.yellow;

export const QRCodePrompt = [
  {
    name: "link",
    description:
      title("Digite o link para gerar o QRCode") + subtitle("\n\nLink"),
    required: true,
  }
];
