import { useState } from "react"


function AppToggle () {
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <button onClick={()=>setShow(!show)}>Click to show/hide</button>
            {show && <p>Bat ngo chua</p>}
        </div>
    )
}

export default AppToggle