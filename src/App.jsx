import { useState } from "react";
import "./App.css";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [updateStorage, setUpdateStorage] = useState({});

    const [downloadIcon, setDownloadIcon] = useState();
    return (
        <>
            <UpdateStorageContext.Provider
                value={{ updateStorage, setUpdateStorage }}
            >
                <Header downloadIcon={setDownloadIcon} />
                <div className="w-64 fixed">
                    <SideNav
                        selectedIndex={(value) => setSelectedIndex(value)}
                    />
                </div>

                <div className="fixed ml-64 grid grid-cols-1 md:grid-cols-8">
                    <div className="md:col-span-3 border h-screen shadow-sm  p-8 overflow-scroll">
                        {selectedIndex === 1 ? (
                            <IconController />
                        ) : (
                            <BackgroundController />
                        )}
                    </div>
                    <div className="md:col-span-5">
                        <LogoPreview downloadIcon={downloadIcon} />
                    </div>
                </div>
            </UpdateStorageContext.Provider>
        </>
    );
}

export default App;
