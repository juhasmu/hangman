import './App.css';
import Main from "./Main";
function App() {
  function choseWord(){
    let wordList = ['sarvikuono','gepardi','puuma','leijona','jaguaari','leopardi','tiikeri','lumileopardi'];
    let random = Math.floor(Math.random()*wordList.length)
    return wordList[random];
  }
  let toGuessChars = choseWord().split('');
  return (
    <div className="App">
      <h1 className='Header'>Hangman</h1>
      <Main toGuessChars={toGuessChars}/>
    </div>
  );
}

export default App;
