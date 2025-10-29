import { error, subtitle, title } from "../utils/chalk.js";

export const initialPrompt = [
  {
    name: "select",
    description:
      title("Escolha a ferramenta\n\n[1] - QRCODE\n[2] - PASSWORD\n[3] - CPF") +
      subtitle("\n\nDigite a opção desejada"),
    pattern: /^[1-2-3]+$/,
    message: error("Escolha apenas entre 1, 2 ou 3\n"),
    required: true,
  },
];
