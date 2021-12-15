import hangman_1 from "./hangman_1.png";
import hangman_2 from "./hangman_2.png";
import hangman_3 from "./hangman_3.png";
import hangman_4 from "./hangman_4.png";
import hangman_5 from "./hangman_5.png";
import hangman_6 from "./hangman_6.png";
import hangman_7 from "./hangman_7.png";
import hangman_8 from "./hangman_8.png";
import hangman_9 from "./hangman_9.png";
import hangman10 from "./hangman10.jpg";

const ShowDrawing = ({drawingIndex}) => {
    let source = [hangman_1,hangman_2,hangman_3,hangman_4,hangman_5,hangman_6,hangman_7,hangman_8,hangman_9,hangman10]
    return (
        <>
            <img src={source[drawingIndex-1]} alt="hangman"/>
        </>
    )
}

export default ShowDrawing
