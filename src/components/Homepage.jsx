import './Homepage.css'
import { Leaderboard } from './Leaderboard'

export const Homepage = () => {
  return (
    <>
      <div className='user-sustainability'>
        <div className="user-name">
          <h1>Welcome, User</h1>
        </div>
        <div className="div sustainability-score">
          <img src="./src/assets/icons8-user-50.png" alt="" />
          <h2>Score</h2>
          <h2>1008</h2>
        </div>
      </div>
    </>
  )
}
