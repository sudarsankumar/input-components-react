import React from 'react'
import './InputTemplate.css'
const STYLES = ['input','input-hover','input-focus','input-error','input-error-hover','input-error-focus','input-disabled','input-icon','input-100']
const SIZES = ['input-md','input-sm']
const DISAB = ['','true']
export const InputTemplate = ({children , inputStyle, inputSize, isDisabled, type, text}) => {
    const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0]
    const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0]
    const checkDisabled = DISAB.includes(isDisabled) ? 'disabled' : DISAB[0]
    if(type === "error")
    {
        return(
            <div className="container-error">
                <label style={{color:"#D32F2F"}}>{text}</label>
                <input type="text" className={`input ${checkInputSize} ${checkInputStyle}`} disabled={checkDisabled} value={children} placeholder="Placeholder" />
                <label>Label</label>
            </div>
        )
    }
    else
    {
        return(
            <div className="container">
                <label style={{color:"#828282"}}>{text}</label>
                <input type="text" className={`input ${checkInputSize} ${checkInputStyle}`} disabled={checkDisabled} value={children} placeholder="Placeholder" />
                <label>Label</label>
            </div>
        )
    }
}