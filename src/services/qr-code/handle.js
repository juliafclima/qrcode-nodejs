import qr from "qrcode-terminal";

import reload from "../../reload.js";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação");
    return;
  }

  qr.generate(result.link, { small: true }, (qrcode) => {
    console.log(qrcode);
  });

  reload();
}

export default handle;
