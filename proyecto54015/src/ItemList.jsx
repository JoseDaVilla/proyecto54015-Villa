import React from 'react'
import './ItemList.css'
import { Link } from 'react-router-dom'

export default function ItemList ({productos}){
    return (
        <section className='cards'>
            {productos.map((item)=>(
                    <Link to={`/item/${item.id}`} key={item.id} className='card'>
                        <img src={item.img} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{item.price} COP</p>
                    </Link>
                    ))}
        </section>
    )
}
