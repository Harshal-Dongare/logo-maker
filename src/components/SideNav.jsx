import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

const SideNav = ({ selectedIndex }) => {
    const menuList = [
        { id: 1, name: "Icon", icon: PencilRuler },
        { id: 2, name: "Background", icon: Image },
        { id: 3, name: "Upgrade", icon: Shield },
    ];

    const [activeMenu, setActiveMenu] = useState(1);
    return (
        <div className="border shadow-md h-screen">
            <div>
                {menuList.map((item) => (
                    <h2
                        className={`p-3 text-lg px-7 my-4 cursor-pointer text-gray-500 hover:text-white hover:bg-[#ff8903] flex gap-2 transition-all duration-300 ease-in-out ${
                            activeMenu === item.id && "bg-[#ff8903] text-white"
                        }`}
                        key={item.id}
                        onClick={() => {
                            setActiveMenu(item.id), selectedIndex(item.id);
                        }}
                    >
                        {<item.icon />}
                        {item.name}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
