import React from 'react'

const Product = (props) => {
    return (
        <div class = 'card'>
            <img src={props.img} width='100px' height='100px'/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Product