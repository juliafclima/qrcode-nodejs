import { error, subtitle, title } from "../utils/chalk.js";

export const reloadPrompt = [
  {
    name: "reload",
    description:
      title("Deseja reiniciar o sistema?\n\n[1] - SIM\n[2] - NÃO") +
      subtitle("\n\nDigite a opção desejada"),
    pattern: /^[1-2]+$/,
    message: error("Escolha apenas entre 1 ou 2\n"),
    required: true,
  },
];
