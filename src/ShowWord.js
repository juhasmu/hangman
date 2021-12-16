import React from 'react'
import Button from "./Button";

const ShowWord = ({toGuessChars, guessedChars}) => {//show word in web page
    function isLetterInWord(letter,word){//check if letter in array word
        for(let letterInWord of word){
            if(letter===letterInWord)return true;//return true if letter in array
        }
        return false;//return false if letter not in array
    }
    function reload() {//reload webpage
        window.location.reload(false);
    }
    let word = '';
    let flag = false;
    for(let letter of toGuessChars){//put guessed char in word
        flag = false;
        for(let i=0;i<guessedChars.length;i++){
            if(letter===guessedChars[i])flag=true;
        }
        if(flag)word = word+letter;
        else word = word+'*';//and * if there are letter witch do not have guessed
    }
    if(isLetterInWord('*',word)){//if there are * in word game continues 
    return (
        <>
          <h2>{word}</h2>  
        </>
    )}//else make button to start over and congratulate player
    return (
        <>
          <h2>{word}</h2>
          <p>Löysit sanan onneksi olkoon</p>
          <Button name = "reload" className = "reload" id='reload' onClick = {reload} />  
        </>
    )
}

export default ShowWord
