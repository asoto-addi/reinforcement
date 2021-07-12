import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterHook = () => {

    const {counter, change} = useCounter()
    


   
    return (
        <div>
            <h3>CounterHook  <small> {counter} </small> </h3>

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
