import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { iconList } from "../constants/icons";

const IconList = ({ selectedIcon }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const storageValue = JSON.parse(localStorage.getItem("value"));
    const [icon, setIcon] = useState(
        storageValue ? storageValue?.icon : "Smile"
    );

    const Icon = ({ name, color, size, rotate }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) return;
        return <LucidIcon color={color} size={size} />;
    };

    return (
        <div>
            <div>
                <label>Icon</label>
                <div
                    onClick={() => setOpenDialog(true)}
                    className=" p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
                >
                    <Icon name={icon} color={"#000"} size={20} />
                </div>
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pic Your Favourite Icon</DialogTitle>
                        <DialogDescription>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto h-[300px] gap-4 p-6">
                                {iconList.map((icon, i) => (
                                    <div key={i}>
                                        <div
                                            className="border-2 border-gray-400 rounded-md cursor-pointer p-3 flex items-center justify-center"
                                            onClick={() => {
                                                selectedIcon(icon);
                                                setOpenDialog(false);
                                                setIcon(icon);
                                            }}
                                        >
                                            <Icon
                                                name={icon}
                                                color={"#000"}
                                                size={20}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default IconList;
