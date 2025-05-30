import { useState } from "react";

const createArrayState = (value, length = 5) => ({
    blue: Array(length).fill(value),
    red: Array(length).fill(value)
});

export const initialPlayerInputState = createArrayState("");


export const usePlayer = () => {
    const [playerInputs, setPlayerInputs] = useState(initialPlayerInputState);

    const handlePlayerInputsChange = (type, team, id, value) => {
        const setState = {
            playerInput: setPlayerInputs
        }[type];

        if (setState) {
            setState(prev => ({
            ...prev,
            [team]: prev[team].map((item, i) => (i === id ? value : item))
        }));
        return;
        }
    };

    return {
        playerInputs, setPlayerInputs,
        handlePlayerInputsChange
    };
};
