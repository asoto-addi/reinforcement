import React from 'react'

export const Functions = () => {
    
    const sum = (a:number, b:number):number =>{
        return a + b
    }
    
    
    return (
        <div>
            <h3>Functions</h3>
            <span>The result is: {sum(2,4)} </span>
        </div>
    )
}
