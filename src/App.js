import React, { useState } from 'react';
import Palette from './components/Palette/Palette.js';
import SavedPalettes from './components/SavedPalettes/SavedPalettes.js';
import './App.css';

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

let localStorageData = localStorage.getItem("saved-palets");
const parsedData = JSON.parse(localStorageData);

if (parsedData === null|| parsedData === "") {
    localStorageData = []
}else {
    localStorageData = parsedData
}

const App = ()=> {
    const [colors, setColors] = useState(Array(5).fill('#ffffff'));
    const [lockedColors, setLockedColors] = useState(Array(5).fill(false));
    const [savedPalettes, setSavedPalettes] = useState(localStorageData);

    const stringPalest = JSON.stringify(savedPalettes);
    localStorage.setItem("saved-palets", stringPalest );


    const generatePalette = () => {
        const newColors = colors.map((color, index) => (lockedColors[index] ? color : getRandomColor()));
        setColors(newColors);
    };

    const savePalette = (name) => {
        setSavedPalettes([...savedPalettes, { id: Date.now(), name, colors }]);
    };

    const deletePalette = (id) => {
        setSavedPalettes(savedPalettes.filter((palette) => palette.id !== id));
    };

    const toggleLockColor = (index) => {
        const updatedLocks = [...lockedColors];
        updatedLocks[index] = !updatedLocks[index];
        setLockedColors(updatedLocks);
    };

    console.log(colors)

    return (
        <div className="app">
            <h1>Color Palette Generator</h1>
            <button className="generate-button" onClick={generatePalette}>Generate New Palette</button>
            <Palette colors={colors} onLock={toggleLockColor} lockedColors={lockedColors} onSave={savePalette} />
            <SavedPalettes palettes={savedPalettes} onDelete={deletePalette} />
        </div>
    );
}

export default App;
