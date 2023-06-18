import { useRef } from "react";
import "../styles/sidebar.css";

export function Sidebar({ clickHandler }) {

    const tabRef = useRef();

    const handleClick = (e, tab) => {
        const selectedTab = document.querySelector(".tab-selected");
        selectedTab.classList.remove("tab-selected");
        clickHandler(tab);
        e.currentTarget.classList.add("tab-selected");
    };

    return (
        <div className = "sidebar" ref = {tabRef}>
            <div 
                className = "tab tab-selected" 
                onClick = { (e) => { handleClick(e, "blog") } }
            >
                📝 Blog 
            </div>

            <div 
                className = "tab" 
                onClick = { (e) => { handleClick(e, "feed") } }
            >
                🗞️ Feed 
            </div>

            <div 
                className = "tab" 
                onClick = { (e) => { handleClick(e, "events") } }
            >
                📢 Events 
            </div>

            <div 
                className = "tab" 
                onClick = { (e) => { handleClick(e, "jobs") } }
            >
                👔 Jobs 
            </div>
        </div>
    );
}

