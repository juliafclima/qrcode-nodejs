import chalk from "chalk";

import handle from "./handle.js";
import main from "../../index.js";

const success = chalk.green;
const subtitle = chalk.yellow;

async function createPassword() {
  const password = await handle();
  console.log(`${subtitle("\nsenha gerada: ")} ${success(password)}`);

  main();
}

export default createPassword;
