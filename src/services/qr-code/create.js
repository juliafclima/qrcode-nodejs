import prompt from "prompt";

import handle from "./handle.js";
import { QRCodePrompt } from "../../prompts/schemaQRCode.js";

async function createQRCode() {
  prompt.get(QRCodePrompt, handle);

  prompt.start();
}

export default createQRCode;
