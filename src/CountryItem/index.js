import './index.css'

const CountryItem = props => {
  const {countryDetails, toggleVisitCountry} = props

  const {id, name, isVisited} = countryDetails
  const buttonClassName = isVisited
    ? 'Visited-button button'
    : 'Visit-button button'

  const onToggleVisitCountry = () => {
    toggleVisitCountry(id)
  }

  return (
    <li className="country-item-container">
      <p className="country-name">{name}</p>
      <button
        type="button"
        className={buttonClassName}
        onClick={onToggleVisitCountry}
      >
        {isVisited ? 'Visited' : 'Visit'}
      </button>
    </li>
  )
}

export default CountryItem
