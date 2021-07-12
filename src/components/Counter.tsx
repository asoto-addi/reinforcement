import React, { useState } from 'react'

export const Counter = () => {


    const [counter, setCounter] = useState(0)

    const change = (number:number) =>{
       return  setCounter(counter + number)
    }

    return (
        <div>
            <h3>Counter  <small> {counter} </small> </h3>

            <button 
                className='btn btn-primary'
                onClick={()=> change(-1) }
                >-1</button>
            &nbsp;
            <button 
                className='btn btn-primary'
                onClick={()=> change(1) }
                >+1</button>


        </div>
    )
}
