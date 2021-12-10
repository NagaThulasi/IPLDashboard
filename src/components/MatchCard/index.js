// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails

  const getColor = () => {
    if (matchStatus === 'Won') {
      return 'green-color-text'
    }
    return 'red-color-text'
  }

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={getColor()}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
