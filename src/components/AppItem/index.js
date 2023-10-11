import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item

  return (
    <li className="item-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
