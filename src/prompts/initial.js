import chalk from "chalk";

const title = chalk.yellow.bold;
const subtitle = chalk.yellow;
const error = chalk.red.italic;

export const initialPrompt = [
  {
    name: "select",
    description:
      title("Escolha a ferramenta\n\n[1] - QRCODE\n[2] - PASSWORD") +
      subtitle("\n\nDigite a opção desejada"),
    pattern: /^[1-2]+$/,
    message: error("Escolha apenas entre 1 e 2\n"),
    required: true,
  },
];
