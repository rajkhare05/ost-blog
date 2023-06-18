import "../styles/card.css";

export function Card({ imageURL, title }) {
    return (
        <div className = "card">
            <img src = { imageURL } className = "post-cover" alt = "Post bg cover" />
            <div className = "post-title"> { title } </div>
        </div>
    );
}

