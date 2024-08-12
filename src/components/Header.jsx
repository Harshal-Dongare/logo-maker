import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Header = ({ downloadIcon }) => {
    return (
        <div className="flex justify-between items-center shadow-sm border p-4">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/logo.png" alt="" className="w-16" />
                <p className="font-bold text-3xl">
                    Instant <span className="text-[#FFA403]">Logo</span>
                </p>
            </div>

            {/* Download Button */}
            <Button
                className="flex gap-2 items-center"
                onClick={() => {
                    downloadIcon(Date.now());
                }}
            >
                <Download className="w-4 h-4" />
                Download
            </Button>
        </div>
    );
};

export default Header;
