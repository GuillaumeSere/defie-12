import React, { useEffect, useState } from "react";
import './App.css';
import dice from './images/icon-dice.svg'
import divider1 from './images/pattern-divider-desktop.svg'
import divider2 from './images/pattern-divider-mobile.svg'

function App() {

    const [advice, setAdvice] = useState({ id: null, text: "" });

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => setAdvice({ id: data.slip.id, text: data.slip.advice }))
            .catch((error) => console.log(error));
    };

    const handleClick = () => {
        fetchAdvice();
    };

    return (
        <div className="card">
            {advice.text && <p>ADVICE  #{advice.id}</p>}
            {advice.text && <q>{advice.text}</q>}
            <picture className="divider">
                <source media="(max-width: 767px)" srcset={divider2} />
                <img src={divider1} />
            </picture>
            <button onClick={handleClick}>
                <img src={dice} alt="dice" />
            </button>
        </div>
    );
}

export default App;
