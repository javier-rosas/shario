import QRCode from "react-qr-code";
import React from 'react'

const Code = () => {
  return <QRCode value={ process.env.APP } />
}

export default Code