import React from 'react'
import Button from "./Button";
const GameOver = () => {
    function reload() {//reload web page
        window.location.reload(false);
      }
      //print Game Over to web page and button for reload and start over
    return (
        <>
          <p className='GameOver'> Game Over!</p>
          <Button name = "reload" className = "reload" id='reload' onClick = {reload} />
        </>
    )
}

export default GameOver
