import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorControllerPicker from "./ColorControllerPicker";
import { UpdateStorageContext } from "../context/UpdateStorageContext";
import IconList from "./IconList";

const IconController = () => {
    const storageValue = JSON.parse(localStorage.getItem("value"));
    const [size, setSize] = useState(
        storageValue ? storageValue?.iconSize : 280
    );
    const [rotate, setRotate] = useState(
        storageValue ? storageValue?.iconRotate : 0
    );
    const [color, setColor] = useState(
        storageValue ? storageValue?.iconColor : "#f3e0e0"
    );
    const { updateStorage, setUpdateStorage } =
        useContext(UpdateStorageContext);

    const [icon, setIcon] = useState(
        storageValue ? storageValue?.icon : "Smile"
    );

    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: icon,
        };

        setUpdateStorage(updatedValue);
        localStorage.setItem("value", JSON.stringify(updatedValue));
    }, [size, rotate, color, icon]);

    return (
        <div>
            <div>
                <IconList selectedIcon={(icon) => setIcon(icon)} />
                <div className="py-2">
                    <label className="p-2 flex justify-between items-center">
                        Size <span>{size}px</span>
                    </label>
                    <Slider
                        onValueChange={(e) => setSize(e[0])}
                        defaultValue={[size]}
                        max={512}
                        step={1}
                    />
                </div>
                <div className="py-2">
                    <label className="p-2 flex justify-between items-center">
                        Rotate <span>{rotate}°</span>
                    </label>
                    <Slider
                        onValueChange={(e) => setRotate(e[0])}
                        defaultValue={[rotate]}
                        max={360}
                        step={1}
                    />
                </div>
                <div className="py-2">
                    <label className="p-2 flex justify-between items-center">
                        Icon Color
                    </label>
                    <ColorControllerPicker
                        hideController={true}
                        selectedColor={(color) => setColor(color)}
                    />
                </div>
            </div>
        </div>
    );
};

export default IconController;
