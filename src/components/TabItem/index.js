import './index.css'

const TabItem = props => {
  const {item, changingStateValue, isSelected} = props
  const {tabId, displayText} = item

  const clickTriggered = () => {
    changingStateValue(tabId)
  }

  const classNameOfPara = isSelected ? 'tabItemForSelected' : 'tabItem'
  const classNameOfLine = isSelected ? 'lineForSelected' : 'line'

  return (
    <li className="listEl">
      <button
        className={`btn ${classNameOfPara}`}
        onClick={clickTriggered}
        type="button"
      >
        {displayText}
      </button>
      <hr className={classNameOfLine} />
    </li>
  )
}

export default TabItem
