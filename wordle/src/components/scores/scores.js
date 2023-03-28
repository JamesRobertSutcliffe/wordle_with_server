import React, { useEffect, useState } from "react";
import axios from "axios";


const Scores = ({ props }) => {

    return (
        <div>

            <p>{props.name}</p>
            <p>{props.guesses}</p>
            <p>{props.solution}</p>

        </div>
    )

}

export default Scores;