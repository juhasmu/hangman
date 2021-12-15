import './App.css';
import Main from "./Main";
function App() {
  function choseWord(){//draw word for game
    let wordList = ['sarvikuono','gepardi','puuma','leijona','jaguaari','leopardi','tiikeri','lumileopardi'];//make wordlist for game
    let random = Math.floor(Math.random()*wordList.length);//get random int between 0 and worldList length-1
    return wordList[random];
  }
  let toGuessChars = choseWord().split('');//make array from string word
  return (
    <div className="App">
      <h1 className='Header'>Hangman</h1>
      <Main toGuessChars={toGuessChars}/>
    </div>
  );
}

export default App;
