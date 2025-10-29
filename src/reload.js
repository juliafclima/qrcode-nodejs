import prompt from "prompt";

import { reloadPrompt } from "./prompts/schemaReload.js";
import main from "./index.js";
import { finish } from "./utils/chalk.js";

async function reload() {
  prompt.get(reloadPrompt, async (err, choose) => {
    if (choose.reload === "1") await main();

    if (choose.reload === "2")
      console.log(finish("\nObrigada por utilizar! :)"));
  });

  prompt.start();
}

export default reload;
