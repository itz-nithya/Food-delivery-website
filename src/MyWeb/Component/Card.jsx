import "../css/Card.css";
import foodimg from"../assets/images/cardimg-1.webp";
import dinningimg from "../assets/images/dinningimg-transformed.webp";
import liveimg from "../assets/images/liveevent-transformed.jpeg";

export function Card(){

    return(
        <>
        <div className="container">
        <div className="row card-parent">
        <div className="col-md-4 card">
            
                <img src={foodimg}/>
                <h1>Order Online</h1>
                <span>Stay home and order to your home step</span>
            

        </div>
        <div className="col-md-4 card">
            
                <img src={dinningimg}/>
                <h1>Dinning</h1>
                <span>View the city's favourite dinning venues</span>
    

        </div>
        <div className="col-md-4 card">
            
                <img src={liveimg}/>
                <h1>Live Events</h1>
                <span>Discover india's best events & concert's</span>
            

        </div>
        </div>
        </div>

        </>
    )
}