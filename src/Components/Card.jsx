import hatman from '../assets/hatman.jpg'

function Card() {
  return (
    <div className="card">
      <img className="cardImg" src={hatman} alt="profile pic"></img>
      <h2>Brian Ahlers Card</h2>
      <p className="cardP">Learn React</p>
    </div>
  )
}

export default Card