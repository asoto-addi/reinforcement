import React from 'react'



/* interface Person {

    name: string, 
    age:number,
    address:{
        country:string,
        idCountry:number
    }

}
 */

interface Person {

    name: string, 
    age:number,
    address: Address
}

interface Address{  
    country:string,
    idCountry:number
}


export const ObjectsLiterals = () => {

    const person : Person = {
        name:'David',
        age:25,
        address:{
            country:'COL', 
            idCountry:57
        }

    }

  /*   person.lastName = 'Soto'  Not available in TS*/



    return (
        <div>
            <h3>Objet literal's</h3>
            { JSON.stringify(person, null, 2)}
        </div>
    )
}
