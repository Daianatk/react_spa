import React, { useState, useEffect } from 'react';
import { foodsRef } from '../services/functions'

export default function() {

//hooks
let [results, setResults] = useState([])
let [list, setList] = useState([])

useEffect(()=>{
    let views = foodsRef.onSnapshot(function(snap){
        let foods = []
        snap.forEach(doc=>{
            foods.push(doc.data())
        })
        setResults(foods)
        setList(foods)
    })

    return views
}, [] )

function onChange(e) {
    let string = e.target.value
    let regex = new RegExp(string, 'desayuno')
    //si es true se guarda en el filtro sino lo elimina
    //se utiliza virtualDom full javascript
    let filtered = list.filter(m => regex.test(m.tags))
    setResults(filtered)
}

    return (
        <div>
        <section className="viewsTotal">
        <button className="button" onChange={onChange} id="desayuno">Desayuno</button>
        <button className="button" id="options">Almuerzo</button>
        <button className="button" id="options">Hamburguesas</button>
        <button className="button" id="options">Acompañamientos</button>
        <button className="button" id="options">Bebidas</button><p/>
        </section>
    <section id="results" className="results">

        {results.map((food) =>{
            return (
            <div className="cards">
                <div className="card">
            <img className="card_img" src={food.img} alt="Foods"/> 
            <div className="card_info">
                <div className="card_title"><b>{food.item} </b></div> 
                <div className="card_category">$ {food.price} </div> 
                </div>
            </div>
            </div>

            )
        })}

    </section>
    </div>
    )
}