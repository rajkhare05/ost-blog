import "../styles/eventcard.css";

export function EventCard({ imageURL, eventTitle, eventSummary, eventLocation, eventDate, eventTime }) {
    return (
        <div className = "event-card">
            <img src = { imageURL } className = "event-image" alt = "event" />
            <div className = "event-details">
                <div className = "event-title"> { eventTitle } </div>
                <div className = "event-summary"> { eventSummary } </div>
                <div className = "event-location-datetime">
                    <div className = "event-location"> 📍 { eventLocation } </div>
                    <div className = "event-date"> 🗓️ { eventDate } </div>
                    <div className = "event-time"> 🕓 { eventTime} </div>
                </div>
            </div>
        </div>
    );
}

