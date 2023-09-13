import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, toggleVisitCountry} = props

  const {id, name, imageUrl} = countryDetails

  const onRemoveCountry = () => {
    toggleVisitCountry(id)
  }

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="image" />
      <div className="name-and-remove-btn-container">
        <p className="country-name">{name}</p>
        <button
          className="remove-button"
          type="button"
          onClick={onRemoveCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountryItem
