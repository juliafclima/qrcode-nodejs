import reload from "../../reload.js";
import { subtitle, success } from "../../utils/chalk.js";

async function createCPF() {
  function generateDigit(cpfArray) {
    const weightStart = cpfArray.length + 1;
    const sum = cpfArray.reduce(
      (acc, num, i) => acc + num * (weightStart - i),
      0
    );
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  const cpf = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  cpf.push(generateDigit(cpf));
  cpf.push(generateDigit(cpf));

  console.log(`${subtitle("\nCPF gerado: ")} ${success(cpf.join(""))}`);

  reload();
}

export default createCPF;
