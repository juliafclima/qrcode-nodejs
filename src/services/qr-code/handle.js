import qr from "qrcode-terminal";

import main from "../../index.js";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação");
    return;
  }

  qr.generate(result.link, { small: true }, (qrcode) => {
    console.log(qrcode);
  });

  main();
}

export default handle;
