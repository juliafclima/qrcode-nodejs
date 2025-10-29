import { subtitle, title } from "../utils/chalk.js";

export const QRCodePrompt = [
  {
    name: "link",
    description:
      title("Digite o link para gerar o QRCode") + subtitle("\n\nLink"),
    required: true,
  }
];
