import Button from "./Button";

const Keyboard = ({guessedChars,setGuessedChars,setCount,count,toGuessC}) => {

    let charList=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','å','ä','ö'] //keyboard keys
    function checkGuess(toGuessC,guessedChars){// checks if guessedChars arrays last char in toGuessC Array
        for(let char of toGuessC){
            if (char === guessedChars[guessedChars.length-1])return true;
        }
        return false;
    }
    function buttonPressed(id){//check if button in keyboard pressed
        let char = id.target.innerHTML;//take buttons name
        guessedChars = [...guessedChars,char];//put char last in guessedChars Array
        setGuessedChars(guessedChars);
        let flag = true;
        if (guessedChars.length>0)flag = checkGuess(toGuessC,guessedChars);// checks if pressed button in toGuessC Array
        if(!flag){//increment count if pressed button not in toGuessC Array
            let temp = count+1;
            setCount(temp);
        }


    }//print keyboard to html page 10 buttons per row
    return (
        <>
            {
              charList.slice(0,10).map((value)=>{
                return <Button name = {value} className = "keyboard" id={'key_'+{value}} onClick = {(e) => buttonPressed(e)} />  
              })  
            }
            <br/>
            {
              charList.slice(10,20).map((value)=>{
                return <Button name = {value} className = "keyboard" id={'key_'+{value}} onClick = {(e) => buttonPressed(e)} />  
              })  
            }
            <br/>
            {
              charList.slice(20,30).map((value)=>{
                return <Button name = {value} className = "keyboard" id={'key_'+{value}} onClick = {(e) => buttonPressed(e)} />  
              })  
            }
            <br/>
        </>
    )
}

export default Keyboard
