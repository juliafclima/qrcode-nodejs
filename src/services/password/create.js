import handle from "./handle.js";
import reload from "../../reload.js";
import { subtitle, success } from "../../utils/chalk.js";

async function createPassword() {
  const password = await handle();
  console.log(`${subtitle("\nsenha gerada: ")} ${success(password)}`);

  reload();
}

export default createPassword;
