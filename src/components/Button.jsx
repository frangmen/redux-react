import React, { useState } from "react";

const Button = () => {
    const [pressed, setPressed] = useState(false);
    console.log("🚀 ~ file: Button.jsx:5 ~ Button ~ pressed:", pressed);
    return (
        <div>
            {pressed ? (
                <div>
                    <h1>¿Are you sure?</h1>
                    <button onClick={() => setPressed(!pressed)}>
                        There's no turning back
                    </button>
                </div>
            ) : (
                <button onClick={() => setPressed(!pressed)}>
                    Hola Mundo, si presionas aquí, no hay vuelta atrás
                </button>
            )}
        </div>
    );
};

export default Button;
