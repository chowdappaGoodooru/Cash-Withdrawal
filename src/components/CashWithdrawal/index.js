// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  remainingBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="name-container">
            <div className="name-logo">
              <p className="logo">S</p>
            </div>
            <h1 className="name">Sai Chowdappa</h1>
          </div>
          <div className="your-balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-container">
              <p className="balance-number">{amount}</p>
              <p className="balance-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="button-list">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  valueList={eachValue}
                  balanceAmount={this.remainingBalance}
                  key={eachValue.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
