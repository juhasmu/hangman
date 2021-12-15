
const ShowGuessedChars = ({guessedChars}) => {
    let txt=''
    for(let char of guessedChars)txt=`${txt} ${char}`;

    return (
        <>
            <br/>
            <p>{txt}</p>
        </>
    )
}

export default ShowGuessedChars
