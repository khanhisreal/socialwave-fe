import styles from "./css/SideBar.module.css";

import { useState } from "react";
import Icon from "./component/Icon.jsx"
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`bg-gray-100 text-black h-screen p-5 transition-all ${isOpen ? "w-64" : "w-20"}`}>
                <div className="flex justify-between items-center mb-6">
                    <h1 className={`text-xl font-bold transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}>Dashboard</h1>
                    <button size="icon" onClick={() => setIsOpen(!isOpen)}>
                        {/*{isOpen ? <X className="text-white" /> : <Icon name="menu" size={24} />}*/}
                    </button>
                </div>
                <nav>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-300 cursor-pointer">
                            <Icon name="home" size={24} />
                            {isOpen && <span>Friends</span>}
                        </li>
                        <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-300 cursor-pointer">
                            <Icon name="user" size={24} />
                            {isOpen && <span>Messenger</span>}
                        </li>
                        <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-300 cursor-pointer">
                            <Icon name="settings" size={24} />
                            {isOpen && <span>Memory</span>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

