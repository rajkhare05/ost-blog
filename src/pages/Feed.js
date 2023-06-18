import { useEffect, useState } from "react";
import { FeedBubble } from "../components/FeedBubble";
import { Spinner } from "../components/Spinner";
import "../styles/feed.css";

export function Feed() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://run.mocky.io/v3/00ec411d-c7ec-4587-b972-688c85d1b07e");
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        })()
    });

    return (
        <div className = "feed">
            { 
                !isLoading ?
                    posts.map((post, i) => 
                        <FeedBubble 
                            body = { post.body} 
                            dateTime = { post.dateTime } 
                            key = {i} 
                        />
                    )
                : <Spinner />
            }
        </div>
    );
}

