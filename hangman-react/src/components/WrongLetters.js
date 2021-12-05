import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return (
        <div className="wrong-letter-container">
            <div>
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {wrongLetters.map((letter, i) => <span key={i}>{`${letter} ,`}</span>)}
            </div>
        </div>
    )
}

export default WrongLetters
