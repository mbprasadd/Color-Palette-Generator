import React, { useState } from 'react';
import './Palette.css';

const  Palette = ({ colors, onLock, lockedColors, onSave }) => {
    const [paletteName, setPaletteName] = useState('');

    const handleSave = () => {
        if (paletteName) {
            onSave(paletteName);
            setPaletteName('');
        }
    };

    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color);
        alert(`Text ${color} Copied to clipboard!`);
    };

    return (
        <div className="palette">
            <div className='colors-palette'>
            {colors.map((color, index) => (
                <div key={index} className="color-block" style={{ backgroundColor: color }}>
                    <p className="hex-code"    onClick={() => copyToClipboard(color)}    >{color}</p> 
                    <button className="lock-button" onClick={() => onLock(index)}>
                        {lockedColors[index] ? 'Unlock' : 'Lock'}
                    </button>
                </div>
            ))}
            </div>
            <input
                type="text"
                placeholder="Name your palette"
                value={paletteName}
                onChange={(e) => setPaletteName(e.target.value)}
            />
            <button onClick={handleSave}>Save Palette</button>
        </div>
    );
}

export default Palette;
