// Write your code her
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch
  return (
    <div className="latest-match-details-container">
      <div>
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div>
        <p className="head1">First Innings</p>
        <p className="para1">{firstInnings}</p>
        <p className="head1">Second Innings</p>
        <p className="para1">{secondInnings}</p>
        <p className="head1">Man Of The Match</p>
        <p className="para1">{manOfTheMatch}</p>
        <p className="head1">Umpires</p>
        <p className="para1">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
