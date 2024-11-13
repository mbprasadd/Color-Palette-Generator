import React from 'react';
import './SavedPalettes.css';

const SavedPalettes = ({ palettes, onDelete })=> {
    return (
        <div className="saved-palettes">
            <h2>Saved Palettes</h2>
            {palettes.map((palette) => (
                <div key={palette.id} className="saved-palette">
                    <h3>{palette.name}</h3>
                    <div className="color-row">
                        {palette.colors.map((color, index) => (
                            <div key={index} className="color-block-small" style={{ backgroundColor: color }}>
                                {color}
                            </div>
                        ))}
                    </div>
                    <button onClick={() => onDelete(palette.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default SavedPalettes;
