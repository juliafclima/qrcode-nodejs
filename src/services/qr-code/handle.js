import qr from "qrcode-terminal";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação");
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(qrcode);
  });
}

export default handle;
