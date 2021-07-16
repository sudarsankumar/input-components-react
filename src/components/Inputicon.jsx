import React from 'react'
import './Inputicon.css'
export const Inputicon = ({type}) => {
    if(type === 'left')
    {
        return(
            <div className="conta">
                <div className="input-cont">
                    <i className="fa fa-phone"></i>
                    <input type="text" className={`inputs`} placeholder="Placeholder" />
                </div>
                <label>Label</label>
            </div>
        )
    }
    else
    {
        return(
            <div className="conta">
                <div className="input-cont">
                    <input type="text" className={`inputs`} placeholder="Placeholder" />
                    <i className="fa fa-lock"></i>
                </div>
                <label>Label</label>
            </div>
        )
    }
}