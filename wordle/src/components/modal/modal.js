
import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

const Modal = ({ isCorrect, turn, solution }) => {

    const [backendData, setBackendData] = useState([]);
    let scoresArr = [];

    useEffect(() => {

        axios.post('/api', {
            "name": "reggy",
            "guesses": turn,
            "solution": solution
        }).then(response => {
            console.log(response.data)
        })
    }, []);

    // options to get data from API via fetch and axios get methods-- may no longer need!
    // useEffect(() => {
    //     axios.get('/api').then(function (data) {
    //         console.log(data.data);
    //         data.data.map((item) => {
    //             scoresArr.push(item)
    //             console.log(scoresArr)
    //         })
    //         // setBackendData(data.data[0].name)
    //     })
    // }, []);
    // 

    return <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <h2 className="solution">{solution}</h2>
                <p>You found the solution in {turn} guesses.</p>
                <h1>{backendData.name}</h1>
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