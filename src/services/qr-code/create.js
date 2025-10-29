import prompt from "prompt";

import { QRCodePrompt } from "../../prompts/qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.get(QRCodePrompt, handle);

  prompt.start();
}

export default createQRCode;
