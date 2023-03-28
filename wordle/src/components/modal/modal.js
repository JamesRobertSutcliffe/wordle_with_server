
import axios from "axios";
import react from "react";
import { useState } from "react";
import Scores from "../scores/scores";

const Modal = ({ isCorrect, turn, solution }) => {

    const [backendData, setBackendData] = useState(null);
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);


    // Updates name variable for submission on key up grabbing data from input below//
    const updateName = (e) => {
        setName(e.target.value)
        console.log(name);
    }

    //POSTS to api and renders data of high scores//

    function PostName() {
        setDisabled(true);
        axios.post('/api', {
            "name": name,
            "guesses": turn,
            "solution": solution
        }).then(response => {
            const data = response.data;
            console.log(data)
            setBackendData(data.map((item) => {
                return <Scores name={item.name}
                    guesses={item.guesses}
                    solution={item.solution} />
            }));
        })
    };

    return <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <h2 className="solution">{solution}</h2>
                <p>You found the solution in {turn} guesses.</p>
                <p>Enter your name to be added to Scores:</p>
                <input type="text" className="name-submit" placeholder="Enter Name" onChange={updateName} />
                <button type="submit" disabled={disabled} onClick={PostName}>Click to reveal Scores!</button>
                {backendData && (<div className="scores">
                    <table className="reverse">
                        {backendData}
                        <tr>
                            <th>Name</th>
                            <th>Guesses</th>
                            <th>Solution</th>
                        </tr>
                    </table>
                </div>)}

            </div>
        )}
        {
            !isCorrect && (
                <div>
                    <h1>You ran out of guesses!</h1>
                    <p className="solution">The answer was {solution}.</p>
                    <h1>{backendData}</h1>
                </div>
            )
        }
    </div >
}

export default Modal