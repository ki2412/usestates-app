import './App.css';

import { useState } from 'react';

function AppInfo () {
    const [info, setInfo] = useState({
        school: 'mindX',
        level: 2,
    })

    const handleUpdate = () => {
        setInfo({
            ...info,
            student: 'Thuy Tram'
        })
    }

    return (
      <div className="AppInfo" style = {{padding:20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
    )
}

export default AppInfo;