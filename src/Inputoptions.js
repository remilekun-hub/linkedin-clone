import React from 'react'
import './style/Inputoptions.css'

function Inputoptions({Icon, title, color}) {
    return (
        <div className="input-option">
            <span style={{color:color}}>
                {Icon}
            </span>
            <p>{title}</p>
        </div>
    )
}

export default Inputoptions
