import React, { useEffect, useState } from "react";
import axios from "axios";


const Scores = ({ name, guesses, solution }) => {

    return (
        <tr className="scores">
            <td>{name}</td>
            <td>{guesses}</td>
            <td>{solution}</td>
        </tr>
    )

}

export default Scores;