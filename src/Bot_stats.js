import React, {
    useState,
    useEffect
} from 'react';
import get_stats from './get_stats.js';

function Stats() {
    const [loading, setLoading] = useState(true)
    const [bot_stats, setStats] = useState()
    const [timesUpdated, setUpdated] = useState(0)

    async function getstats() {
        let new_stats = await get_stats();
        setStats(new_stats)
        setLoading(false);
    }
    function StatText(class_name, text, stat, type) {
        if (loading) {
            return <div className={class_name} > loading... </div>;
        } else {
            return <div className={class_name} >
                <div className="numbers"> {bot_stats[stat][type]}</div>
                <div className="text">{text}</div>
            </div>;
        }
    }
    if (timesUpdated === 0) {
        getstats()
        setUpdated(1)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getstats()
        }, 3000);
        return () => clearInterval(interval);
    })
    return (
        <div className="box" >
            <div className="first-row">
                <div className="sliced-circle">
                    {StatText("main-stat", "messages sent today", "messages_today", "string")}
                </div>
                <div className="otherStats">
                    {StatText("total-doujins", "total doujins", "users_total", "string")}
                    {StatText("total-users", "total users", "manga_total", "string")}
                    {StatText("total-messages", "total messages sent", "messages_total", "string")}
                </div>
            </div>
            {/* <button className="buttons" onClick={updateStats} >
                Update stats
            </button> */}
        </div>
    );
};

export default Stats;