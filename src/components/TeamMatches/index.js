// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatches: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    id: data.id,
    date: data.date,
    venue: data.venue,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    competingTeam: data.competing_team,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
    competingTeamLogo: data.competing_team_logo,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const matchesDetails = {
      id: data.id,
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(recentMatch =>
        this.getFormattedData(recentMatch),
      ),
    }
    this.setState({teamMatches: matchesDetails, isLoading: false})
  }

  renderMatchDetails = () => {
    const {teamMatches} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <p className="paragraph">Latest Matches</p>
        <LatestMatch latestMatch={latestMatchDetails} />
        <ul className="unordered-list">
          {recentMatches.map(eachRecentMatch => (
            <MatchCard
              recentMatchDetails={eachRecentMatch}
              key={eachRecentMatch.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
