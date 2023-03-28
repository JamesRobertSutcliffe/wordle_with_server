import React, { useEffect, useState } from "react";
import useWordle from "../../hooks/useWorldle";
import Grid from "../board/grid";
import Keypad from "../keypad/keypad";
import Modal from "../modal/modal";

const Wordle = ({ solution }) => {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    const [showModal, setShowModal] = useState(false);

    // Below effect determines when to complete game//
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000);
            window.removeEventListener('keyup', handleKeyup);
        }

        if (turn > 5) {
            setTimeout(() => setShowModal(true), 2000);
            window.removeEventListener('keyup', handleKeyup);

        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            {showModal && < Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}

export default Wordle;