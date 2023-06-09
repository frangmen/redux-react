import React, { useState } from "react";

const Button = () => {
    const [pressed, setPressed] = useState(false);
    return (
        <div>
            {pressed ? (
                <div>
                    <h1>Ocultar</h1>
                    <button onClick={() => setPressed(!pressed)}>
                        Toda la informacion
                    </button>
                </div>
            ) : (
                <button onClick={() => setPressed(!pressed)}>
                    Hola Mundo, mostrar
                </button>
            )}
        </div>
    );
};

export default Button;
