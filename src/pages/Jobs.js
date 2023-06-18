import { useEffect, useState } from "react";
import { JobCard } from "../components/JobCard";
import { Spinner } from "../components/Spinner";
import "../styles/jobs.css";

export function Jobs({ loadHandler }) {

    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://run.mocky.io/v3/b204267c-34cc-4aec-8fd2-d4d312403731");
            const data = await res.json();
            setJobs(data);
            setLoading(false);
        })()
    });

    return (
        <div className = "jobs">
            {
                !isLoading ?
                    jobs.map((job, index) => 
                        <JobCard 
                            role = { job.role }
                            org = { job.org }
                            skills = { job.skills }
                            postedOn = { job.postedOn }
                            endsOn = { job.endsOn }
                            key = { index }
                        />
                    )
                : <Spinner />
            }            
        </div>
    );
}

