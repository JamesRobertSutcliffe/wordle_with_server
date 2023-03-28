import React, { useEffect, useState } from "react";
import axios from "axios";


const Scores = ({ name, guesses, solution }) => {

    return (
        <div>

            <p>{name}</p>
            <p>{guesses}</p>
            <p>{solution}</p>

        </div>
    )

}

export default Scores;