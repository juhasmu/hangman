import Button from "./Button";

const Keyboard = ({guessedChars,setGuessedChars,setCount,count,toGuessC}) => {

    let charList=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','å','ä','ö']
    function checkGuess(toGuessC,guessedChars){
        for(let char of toGuessC){
            if (char === guessedChars[guessedChars.length-1])return true;
        }
        return false;
    }
    function buttonPressed(id){
        let char = id.target.innerHTML;
        guessedChars = [...guessedChars,char];
        setGuessedChars(guessedChars);
        let flag = true;
        if (guessedChars.length>0)flag = checkGuess(toGuessC,guessedChars);
        if(!flag){
            let temp = count+1;
            setCount(temp);
        }


    }
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
