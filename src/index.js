import prompt from "prompt";
import dotenv from "dotenv";

import { initialPrompt } from "./prompts/schemaInitial.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

dotenv.config();

async function main() {
  prompt.get(initialPrompt, async (err, choose) => {
    if (choose.select === "1") await createQRCode();

    if (choose.select === "2") await createPassword();
  });

  prompt.start();
}

main();

export default main;
