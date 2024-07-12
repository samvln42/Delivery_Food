import React from 'react'
import {QRCodeSVG} from 'qrcode.react';


const QrCode = () => {
  return (
    <div style={{textAlign: "center", width: "100%", marginTop: "15rem"}}>
        {/* <p>My scan QR code</p> */}
        <QRCodeSVG/>

    </div>
  )
}

export default QrCode