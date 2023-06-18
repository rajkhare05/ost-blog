import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import "../styles/blog.css";

export function Blog() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://run.mocky.io/v3/644beef4-7770-4e94-9238-6f5c467021d5");
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        })()
    }, []);

    return (
        <div className = "blog">
            { !isLoading ?
                <div className = "blog-list">
                {
                    posts.map((post, index) => 
                        <Card 
                            imageURL = { post.imageURL } 
                            title = { post.title }
                            key = { index } 
                        />
                    )
                }
                </div>
                : <Spinner />
            }
        </div>
    );
}

