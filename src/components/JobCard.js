import "../styles/jobcard.css";

export function JobCard({ role, org, skills, postedOn, endsOn }) {
    return (
        <div className = "job-card">
            <div className = "role"> { role } </div>
            <div className = "organization"> { org } </div>
            <div className = "skills"> Skills: { skills.join(", ") } </div>
            <div className = "posted-on"> Posted On: { postedOn } </div>
            <div className = "ends-on"> Ends On: { endsOn } </div>
        </div>
    );
}

