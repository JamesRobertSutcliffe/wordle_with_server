
import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

const Modal = ({ isCorrect, turn, solution }) => {

    const [backendData, setBackendData] = useState(null);

    //create form and submit button that takes state of name and pass this axios.post function object
    // then post to axios server
    // then write function that get's from our server and renders a scores table

    function PostName() {
        axios.post('/api', {
            "name": "reggy",
            "guesses": turn,
            "solution": solution
        }).then(response => {
            const data = response.data;
            console.log(data)
        })

    }

    return <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <h2 className="solution">{solution}</h2>
                <p>You found the solution in {turn} guesses.</p>
                <button onClick={PostName}>Click</button>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You ran out of guesses!</h1>
                <p className="solution">The answer was {solution}.</p>
                <h1>{backendData.name}</h1>
            </div>
        )}
    </div>
}

export default Modal