import QRCode from "react-qr-code";

const Code = () => {
  return <QRCode value={ process.env.APP } />
}

export default Code