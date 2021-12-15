import ShowDrawing from "./ShowDrawing";
import ShowWord from "./ShowWord";
import { useState } from 'react'
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";
import ShowGuessedChars from "./ShowGuessedChars";

const Main = ({toGuessChars}) => {
    
    let [count,setCount] = useState(0);//make count variable
    let [guessedChars,setGuessedChars]=useState([]);
    if(count<1){//if there are no wrong answers do not draw picture
        return (
            <>
                <ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars}/>
                <Keyboard guessedChars={guessedChars} setGuessedChars={setGuessedChars} setCount={setCount} count={count} toGuessC={toGuessChars}/>
                <ShowGuessedChars guessedChars={guessedChars}/>  
            </>
        )}
    else if(count>10){//if there 10 wrong answers draw picture and Game Over but no keyboard
        return (
            <>
                <ShowDrawing drawingIndex={10}/>
                <GameOver/> 
            </>
        )
    }
    else{//show all
    return (
        <>
            <ShowDrawing drawingIndex={count}/>
            <ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars}/>
            <Keyboard guessedChars={guessedChars} setGuessedChars={setGuessedChars} setCount={setCount} count={count} toGuessC={toGuessChars}/>  
            <ShowGuessedChars guessedChars={guessedChars}/>
        </>
    )}
}

export default Main
