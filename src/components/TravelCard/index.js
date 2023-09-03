import './index.css'

const TravelCard = props => {
  const {packageList} = props
  const {name, imageUrl, description} = packageList
  return (
    <li className="package-item">
      <img className="package-image" src={imageUrl} alt={name} />
      <div className="content">
        <h1 className="package-name">{name}</h1>
        <p className="package-description">{description}</p>
      </div>
    </li>
  )
}

export default TravelCard
