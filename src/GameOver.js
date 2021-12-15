import React from 'react'
import Button from "./Button";
const GameOver = () => {
    function reload() {
        window.location.reload(false);
      }
    return (
        <>
          <p className='GameOver'> Game Over!</p>
          <Button name = "reload" className = "reload" id='reload' onClick = {reload} />
        </>
    )
}

export default GameOver
