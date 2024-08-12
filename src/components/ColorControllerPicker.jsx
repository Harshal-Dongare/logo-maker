import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorControllerPicker = ({ hideController = false, selectedColor }) => {
    const [color, setColor] = useState("#f3e0e0");

    return (
        <div>
            <ColorPicker
                value={color}
                onChange={(e) => {
                    setColor(e);
                    selectedColor(e);
                }}
                hideControls={hideController}
                hideEyeDrop
                hideAdvancedSliders
                hideColorGuide
                hideInputType
            />
        </div>
    );
};

export default ColorControllerPicker;
