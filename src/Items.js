import React,{useContext, useEffect} from 'react'
import {ContextTicTac} from './Context'


function Items(props) {
    const [items,setItems,itemX,setItemX,firstCombination,setFirstCombination,secondCombination,setSecondCombination,count,setCount] 
    = useContext(ContextTicTac)
    let win = 
    ['123','456','789','147',
    '258','369','159','357',
    '213','546','879','417','528','639','519','537',
    '132','465','798','174','285','396','195','375']
    useEffect(()=>{
        let board = document.querySelector('.board').children
        let loader = document.querySelector('.loader')

        if(firstCombination.length>3){
            let search = win.map(i=>i.split(''))
            search =  search.map(i=>i.map(k=>firstCombination.includes(k)))
            .map(i=>new Set([...i])).filter(i=>[...i].length===1).map(i=>i=[...i])
            if(search.flat().includes(true)){
                document.querySelector('.board').style.opacity = 0.5
                alert('Player X Wins!')
                loader.style.display = 'block'
                window.location.reload()
            }
            

        }
        if(secondCombination.length>3){
            let search = win.map(i=>i.split(''))
            search = search.map(i=>i.map(k=>secondCombination.includes(k)))
            .map(i=>new Set([...i])).filter(i=>[...i].length===1).map(i=>i=[...i])
            if(search.flat().includes(true)){
                document.querySelector('.board').style.opacity = 0.5
                alert('Player O Wins!')
                loader.style.display = 'block'
                window.location.reload()
            }
            

        }
        if(count===9){
            document.querySelector('.board').style.opacity = 0.5
            alert('No Winner')
            loader.style.display = 'block'
            window.location.reload()
        }
    })
    const clickTurn = (e)=>{
        let container = document.querySelector('.container').children
        let target = e.target
        if(itemX && target.innerHTML=='I'){
            target.innerHTML = 'X'
            target.classList.add('activeX')
            setFirstCombination(firstCombination + target.className)
            setItemX(!itemX)
            setCount(count+1)
        }else if(!itemX && target.innerHTML=='I'){
            target.innerHTML = 'O'
            target.classList.add('activeO')
            setSecondCombination(secondCombination + target.className )
            setItemX(!itemX)
            setCount(count+1)
        }
    }
    return (
        <div className={props.name} onClick={clickTurn}>I</div>
    )
}

export default Items;
