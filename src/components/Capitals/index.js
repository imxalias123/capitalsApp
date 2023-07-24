import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getSelectedCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return activeCountry
  }

  render() {
    const {activeCapitalId} = this.state
    const {country} = this.getSelectedCountry(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries and Capitals</h1>
          <div className="selectingElement">
            <select
              className="select-box"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.capitalDisplayText}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
