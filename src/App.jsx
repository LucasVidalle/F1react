import './App.css'
import { Card } from "./assets/Components/Card.jsx"

const DRIVERS = [
  {
    "name": "Webber",
    "surname": "Mark",
    "ranking": 3,
    "points": 258,
    "lastRace": 1,
    "wins": 1,
    "poles": 3,
    "bestPosition": 1,
    "nationality": "Australia",
    "team": "Red Bull",
    "teamPoints": 650
  },
  {
    "name": "Vettel",
    "surname": "Sebastian",
    "ranking": 1,
    "points": 392,
    "lastRace": 2,
    "wins": 11,
    "poles": 15,
    "bestPosition": 1,
    "bestPositionTimes": 11,
    "nationality": "Germany",
    "team": "Red Bull",
    "teamPoints": 650
  },
  {
    "name": "Button",
    "surname": "Jenson",
    "ranking": 2,
    "points": 270,
    "lastRace": 3,
    "wins": 3,
    "poles": 0,
    "bestPosition": 1,
    "bestPositionTimes": 3,
    "nationality": "United Kingdom",
    "team": "McLaren",
    "teamPoints": 497
  },
  {
    "name": "Massa",
    "surname": "Felipe",
    "ranking": 6,
    "points": 118,
    "lastRace": 5,
    "wins": 0,
    "poles": 0,
    "bestPosition": 5,
    "bestPositionTimes": 6,
    "nationality": "Brazil",
    "team": "Ferrari",
    "teamPoints": 375
  },
  {
    "name": "Alonso",
    "surname": "Fernando",
    "ranking": 4,
    "points": 257,
    "lastRace": 4,
    "wins": 1,
    "poles": 0,
    "bestPosition": 1,
    "nationality": "Spain",
    "team": "Ferrari",
    "teamPoints": 375
  },
  {
    "name": "Hamilton",
    "surname": "Lewis",
    "ranking": 5,
    "points": 227,
    "wins": 3,
    "poles": 1,
    "bestPosition": 1,
    "bestPositionTimes": 3,
    "nationality": "United Kingdom",
    "team": "McLaren-Mercedes",
    "teamPoints": 497
  },
  {
    "name": "Schumacher",
    "surname": "Michael",
    "ranking": 8,
    "points": 76,
    "lastRace": 15,
    "wins": 0,
    "poles": 0,
    "bestPosition": 4,
    "nationality": "Germany",
    "team": "Ferrari",
    "teamPoints": 165
  },
  {
    "name": "Rosberg",
    "surname": "Nico",
    "ranking": 7,
    "points": 89,
    "wins": 0,
    "poles": 0,
    "bestPosition": 5,
    "bestPositionTimes": 2,
    "nationality": "Germany",
    "team": "Mercedes GP",
    "teamPoints": 165
  },
]

const COUNTRIES = {
  Australia: {
    backgroundColor: 'yellow',
    color: 'black',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'
  },
  Brazil: {
    backgroundColor: 'green',
    color: 'black',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png'},
  Germany: {
    backgroundColor: 'black',
    color: 'white',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
  },
  Spain: {
    backgroundColor: 'red',
    color: 'black',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png'
  },
  'United Kingdom': {
    backgroundColor: 'blue',
    color: 'white',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'
  }
}

const TEAM_LOGOS = {
  Ferrari: 'https://e7.pngegg.com/pngimages/202/123/png-clipart-ferrari-laferrari-car-ferrari-458-scuderia-ferrari-ferrari-logo-car.png',
  McLaren: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/2560px-McLaren_Racing_logo.svg.png',
  'Mercedes GP': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png',
  'McLaren-Mercedes': 'https://ih1.redbubble.net/image.2257949995.5265/st,small,507x507-pad,600x600,f8f8f8.jpg',
  'Red Bull': 'https://cdn-7.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg'
}

function App() {
  return (
    <div className='cards-container'>
      {DRIVERS.map((driver) => {
        const teamLogo = TEAM_LOGOS[driver.team]
        const countryInfo = COUNTRIES[driver.nationality]
        return (
          <Card
            key={driver.ranking}
            name={driver.name}
            surname={driver.surname}
            points={driver.points}
            lastRace={driver.lastRace}
            wins={driver.wins}
            poles={driver.poles}
            bestPosition={driver.bestPosition}
            team={driver.team}
            teamPoints={driver.teamPoints}
            teamLogo={teamLogo}
            countryFlag={countryInfo.flag}
            countrycolor={countryInfo.color}
          />
        )
      })}
    </div>
  );   
}

export default App
