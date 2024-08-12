import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorControllerPicker from "./ColorControllerPicker";
import { UpdateStorageContext } from "../context/UpdateStorageContext";

const BackgroundController = () => {
    const storageValue = JSON.parse(localStorage.getItem("value"));
    const [rounded, setRounded] = useState(
        storageValue ? storageValue?.bgRounded : 0
    );
    const [padding, setPadding] = useState(
        storageValue ? storageValue?.bgPadding : 40
    );
    const [color, setColor] = useState(
        storageValue ? storageValue?.bgColor : "#f3e0e0"
    );
    const { updateStorage, setUpdateStorage } =
        useContext(UpdateStorageContext);

    console.log(color);
    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            bgRounded: rounded,
            bgPadding: padding,
            bgColor: color,
        };

        setUpdateStorage(updatedValue);
        localStorage.setItem("value", JSON.stringify(updatedValue));
    }, [rounded, padding, color]);

    return (
        <div>
            <div className="py-2 w-80">
                <label className="p-2 flex  justify-between items-center">
                    Rounded <span>{rounded}px</span>
                </label>
                <Slider
                    onValueChange={(e) => setRounded(e[0])}
                    defaultValue={[0]}
                    max={512}
                    step={1}
                />
            </div>

            <div className="py-2 w-80">
                <label className="p-2 flex  justify-between items-center">
                    Padding <span>{padding}px</span>
                </label>
                <Slider
                    onValueChange={(e) => setPadding(e[0])}
                    defaultValue={[40]}
                    max={512}
                    step={1}
                />
            </div>
            <div className="py-2">
                <label className="p-2 flex justify-between items-center">
                    Icon Color
                </label>
                <ColorControllerPicker
                    hideController={false}
                    selectedColor={(color) => setColor(color)}
                />
            </div>
        </div>
    );
};

export default BackgroundController;
