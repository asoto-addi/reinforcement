import React from "react";

export const TypeBasics = () => {

    let name: string | number = 'David'
    console.log(name)
    

    let name2: number = 123
    console.log(name2)


    const renderName:string = 'Amaury'
    
    const age:number = 29


    const isActive:boolean = false


    const powers: string[] = ['Fly','Force','Value']

    /* powers.push(10) */ //Error
    powers.push('Beautiful') //data type string, so ok


    const otherThings : (string | number)[] = ['Hi', 23 ]

    otherThings.push(45)    //ok
    otherThings.push('Here other string') //ok


  return (
    <>
      <h3>Types Basics</h3>
      {renderName}, {age} , {(isActive) ? 'active' : 'no active' }
    </>
  );
};
