import "./Card.css"

function Card ({name, surname, ranking, points, lastRace, wins, poles, bestPosition, countryFlag, teamLogo, teamPoints}){
    return (
        <div className="structure-card">
            <div className="content-card">
                <div className="title">
                    <p className="ranking">{ranking}</p>
                    <h1 className="racer-name">- {name} {surname}</h1>
                </div>
                <div className="current-box">
                    <p className="boxes-titles">Current</p>
                        <div className="current-content">
                            <p className="current-data">Points: {points}</p>
                            <p className="current-data">Last race: {lastRace}</p>
                        </div>
                </div>        
                <div className="historic-box">
                    <p className="boxes-titles">Historic</p>
                        <div className="historic-data">
                            <div className="wins">
                                <p className="historical-statistics">Wins</p>
                                <p className="statistics-numbers">{wins}</p>
                            </div>
                            <div className="poles">
                                <p className="historical-statistics">Poles</p>
                                <p className="statistics-numbers">{poles}</p>
                            </div>
                            <div className="best">
                                <p className="historical-statistics">Best</p>
                                <p className="statistics-numbers">{bestPosition}</p>
                            </div>
                        </div>
                </div>
                <div className="images">
                    <img className="flags" src={countryFlag}/>
                    <img className="teams" src={teamLogo}/>
                </div>
                <div className="team-points">
                    <p className="team-points-number">Team points: {teamPoints}</p>
                </div>
            </div>
        </div>

        
    )
}

export { Card }