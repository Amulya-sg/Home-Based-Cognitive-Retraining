import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MchatRtest.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img1 from "./images/jigsaw.jpg";
import img2 from "./images/pic1.png";
import img3 from "./images/pic2.png";
import img4 from "./images/pic4.png";
import img5 from "./images/pic6.png";

const images = [img1 ,img2 , img3, img4, img5];

function Game1() {
    const [text, setText] = useState("Unpuzzle the pieces!!");
    const [selectedImage, setSelectedImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        
        const randomIndex = Math.floor(Math.random() * images.length);
        setSelectedImage(images[randomIndex]);
    }, []);

    const set = () => {
        setText("Congratulations!!");
        const score = 50;
        localStorage.setItem('Jigsawscore',score); 
    };

    const handleRetry = () => {
        
        const randomIndex = Math.floor(Math.random() * images.length);
        setSelectedImage(images[randomIndex]);
        setText("Unpuzzle the pieces!!");
    };

    const handleBack = () => {
      
      const ID = localStorage.getItem('userId');
      navigate(`/actualhome/${ID}`)
        
        console.log("Back button clicked");
    };

    return (
        <>
            <h2 className="tag">{text}</h2>
            <JigsawPuzzle
                imageSrc={selectedImage}
                rows={3}
                columns={3}
                onSolved={set}
                className="jigsaw-puzzle"
            />
            <div className="buttons-container">
                <button onClick={handleRetry}>Retry</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </>
    );
}

export default Game1;
