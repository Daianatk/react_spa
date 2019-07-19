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


    return (
        <div>
        <section className="viewsTotal">
        <button className="button" id="desayuno">Desayuno</button>
        <button className="button" id="almuerzo">Almuerzo y Cena</button><p/>
        <input type="text" className="inputClient" placeholder="Escriba el nombre del Cliente"></input><p/>
        </section>
    <section id="results" className="results">

        {results.map((food) =>{
            return (
            <div className="conteiner">
                <div className="card">
                    <img className="cardImg" src={food.img} alt="Foods"/> 
                        <div className="cardContent">
                        <button className="button"><b>{food.item}</b> ${food.price}</button> 
                        </div>
                </div>
            </div>
            )
        })}

    </section>
    </div>
    )
}