// Write your code here
import './index.css'

const DenominationItem = props => {
  const {valueList, balanceAmount} = props
  const {value} = valueList
  const balanceCheck = () => {
    balanceAmount(value)
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={balanceCheck}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
