import profilepic from './assets/PLP 1.jpg'

function Card(){

    return(
        <div className= "card">
        <img className="card-image" src={profilepic} alt="profile picture"></img>
        <h2 className="card-title">Klein Solutions</h2>
        <p> I make scalable web applications</p>
        </div>
    );

}

export default Card