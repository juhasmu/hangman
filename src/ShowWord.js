import React from 'react'
import Button from "./Button";

const ShowWord = ({toGuessChars, guessedChars}) => {
    function isLetterInWord(letter,word){
        for(let letterInWord of word){
            if(letter===letterInWord)return true;
        }
        return false;
    }
    function reload() {
        window.location.reload(false);
    }
    let word = '';
    let flag = false;
    for(let letter of toGuessChars){
        flag = false;
        for(let i=0;i<guessedChars.length;i++){
            if(letter===guessedChars[i])flag=true;
        }
        if(flag)word = word+letter;
        else word = word+'*';
    }
    if(isLetterInWord('*',word)){
    return (
        <>
          <h2>{word}</h2>  
        </>
    )}
    return (
        <>
          <h2>{word}</h2>
          <p>Löysit sanan onneksi olkoon</p>
          <Button name = "reload" className = "reload" id='reload' onClick = {reload} />  
        </>
    )
}

export default ShowWord
