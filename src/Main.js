import ShowDrawing from "./ShowDrawing";
import ShowWord from "./ShowWord";
import { useState } from 'react'
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";
import ShowGuessedChars from "./ShowGuessedChars";

const Main = ({toGuessChars}) => {
    
    let [count,setCount] = useState(0);
    let [guessedChars,setGuessedChars]=useState([]);
    if(count<1){
        return (
            <>
                <ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars}/>
                <Keyboard guessedChars={guessedChars} setGuessedChars={setGuessedChars} setCount={setCount} count={count} toGuessC={toGuessChars}/>
                <ShowGuessedChars guessedChars={guessedChars}/>  
            </>
        )}
    else if(count>10){
        return (
            <>
                <ShowDrawing drawingIndex={10}/>
                <GameOver/> 
            </>
        )
    }
    else{
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
