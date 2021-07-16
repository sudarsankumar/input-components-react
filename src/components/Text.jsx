import React from 'react'
import './Text.css'
export const Text = ({text}) => {
    if( text === "&:hover" || text === "&:focus")
    {
        return <p className="hover-text">{text}</p>
    }
    else
    {
        return <p className="button-text">{text}</p>
    }
}