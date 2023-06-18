import "../styles/feedbubble.css";

export function FeedBubble({ body, dateTime }) {
    return (
        <div className = "feed-bubble">
            <div className = "feed-body"> { body } </div>
            <div className = "date-time"> { dateTime } </div>
        </div>
    );
}

