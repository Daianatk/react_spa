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
    let regex = new RegExp(string, 'i')
    //si es true se guarda en el filtro sino lo elimina
    //se utiliza virtualDom full javascript
    let filtered = list.filter(m => regex.test(m.tags))
    setResults(filtered)
}

    return (
        <div>
        <section className="viewsTotal">
        <label onChange={onChange} id="lista"/>
        </section>
    <section id="results" className="results">

        {results.map((food, index) =>{
            return (
            <tr>
                <td>{food.item}</td>
                <td>{food.price}</td>
              </tr>
            )
        })}

    </section>
    </div>
    )
}