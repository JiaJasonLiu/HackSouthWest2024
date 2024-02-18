import React from 'react'

function Timer(){
    const endtime = Date.now() + ((20 * 60000) - 80000)

    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);

    function getTime(){
        const timeElapsed = endtime - Date.now();

        setSeconds(Math.floor((timeElapsed / 1000) % 60));
        setMinutes(Math.floor((timeElapsed / 1000 / 60) % 60));
    }

    React.useEffect(()=>{
        const interval = setInterval(()=> getTime(endtime), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>
                <p>GET IT NOW: {minutes}:{seconds}</p>
            </div>
        </div>
    )
}

export default Timer