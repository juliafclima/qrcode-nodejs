import prompt from "prompt";

import { initialPrompt } from "./prompts/initial.js";
import createQRCode from "./services/qr-code/create.js";

async function main() {
  prompt.get(initialPrompt, async (err, choose) => {
    if (choose.select === "1") await createQRCode();

    if (choose.select === "2") console.log("Password");
  });

  prompt.start();
}

main();
