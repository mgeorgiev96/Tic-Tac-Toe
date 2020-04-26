import React,{useContext} from 'react'
import {ContextTicTac} from './Context'
import Items from './Items';

function Game() {
    const [items,setItems,itemX,setItemX] = useContext(ContextTicTac)
    return (
        <>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className='board'>
            {items.map(item=><Items name={item} key={item} />)}
        </div>
        </>
    )
}

export default Game;
