import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { Spinner } from "../components/Spinner";
import "../styles/events.css";

export function Events() {

    const [events, setEvents] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://run.mocky.io/v3/42bf1d6e-5fd2-453c-851c-b2acac8be48a");
            const data = await res.json();
            setEvents(data);
            setLoading(false);
        })()
    }, []);

    return (
        <div className = "events">
            {
                !isLoading ?
                    events.map((event, index) => 
                        <EventCard 
                            imageURL = { event.imageURL }
                            eventTitle = { event.eventTitle }
                            eventSummary = { event.eventSummary }
                            eventLocation = { event.eventLocation}
                            eventDate = { event.eventDate }
                            eventTime = { event.eventTime }
                            key = { index }
                        />
                    )
                : <Spinner />
            }
        </div>
    );
}

