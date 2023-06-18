import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Blog } from "./pages/Blog";
import { Events } from "./pages/Events";
import { Feed } from "./pages/Feed";
import { Jobs } from "./pages/Jobs";
import "./styles/app.css";

export default function App() {

    const [tab, setTab] = useState("blog");

    const component = (tab) => {
        switch (tab) {
            case "blog":
                return <Blog />
            case "feed":
                return <Feed />
            case "events":
                return <Events /> 
            case "jobs":
                return <Jobs /> 
            default:
                return null
        }
    };

    return (
        <div className="App">
            <Header />
            <div className = "pane">
                <Sidebar clickHandler = { setTab }/>
                { component(tab) }
            </div>
        </div>
    );
}

