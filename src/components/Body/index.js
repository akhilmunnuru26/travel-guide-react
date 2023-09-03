import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelCard from '../TravelCard'
import './index.css'

// Replace your code here

class Body extends Component {
  state = {travelList: [], loading: true}

  componentDidMount() {
    this.fetchTravelData()
  }

  fetchTravelData = async () => {
    const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(travelGuidePackagesApiUrl)
    const data = await response.json()
    console.log(response)

    const formattedData = data.packages.map(eachItem => ({
      id: 1,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({loading: false, travelList: formattedData})
  }

  loadingView = () => (
    <div data-testid="loader" className="loader-spinner">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {travelList} = this.state

    return (
      <ul className="packages-list-container">
        {travelList.map(eachPackage => (
          <TravelCard key={eachPackage.id} packageList={eachPackage} />
        ))}
      </ul>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Travel Guide</h1>
        {loading ? this.loadingView() : this.successView()}
      </div>
    )
  }
}

export default Body
