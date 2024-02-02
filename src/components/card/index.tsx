import Header from "../header";
import Image from "../image";
import Body from "../body";
import Button from "../button";
import "./card.css"

function Card() {
    return (
            <div className="card-container">
                <Image />
                <div className="container-text">
                    <Header />
                    <Body />
                    <Button />
                </div>    
            </div>   
    );
}

export default Card;