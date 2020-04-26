import React, { createContext, useState } from 'react'


export const ContextTicTac = createContext()

export const TicTacProvider = (props)=>{

    const [items,setItems] = useState([1,2,3,4,5,6,7,8,9])
    const [itemX,setItemX] = useState(true)
    const [firstCombination,setFirstCombination] = useState('')
    const [secondCombination,setSecondCombination] = useState('')
    const [count,setCount] = useState(0)
    return(
        <ContextTicTac.Provider value=
        {[items,setItems,itemX,setItemX,firstCombination,setFirstCombination,secondCombination,setSecondCombination,count,setCount]}>
            {props.children}
        </ContextTicTac.Provider>
    )
}