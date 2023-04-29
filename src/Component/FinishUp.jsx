import React from 'react'
import './FinishUp.css'

function FinishUp({handleFinish,
                  ArcadePay,
                  OnlinePay,
                  LargerPay,
                  year,
                  change,
                  Yearly, 
                  total
}) {
  return (
    <div>
      <div className="con-fin">
        <div className="arcade-yearly">
          <div className="arc">Arcade {Yearly}</div>
          <div className="changee" onClick={handleFinish}>Change</div>
        </div>
        <div className="amt">${ArcadePay}/{year}</div>
      <hr />
      <div className="underhr">
        <div className="onlinee">Online Storage</div>
        <div className="large">Large Storage</div>
        <div className="amt2">${OnlinePay}/{year}</div>
        <div className="amt3">${LargerPay}/{year}</div>
      </div>
      </div>

      <div className="tot">Total per Month</div>
      <div className="amt4">${total}/mo</div>
    </div>
  )
}

export default FinishUp