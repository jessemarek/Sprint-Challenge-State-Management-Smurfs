import React from 'react'

const SmurfCard = props => {

    return (
        <div>
            <h2>{props.name}</h2>
            <h4>age: {props.age}</h4>
            <h4>height: {props.height}</h4>

        </div>
    )
}

export default SmurfCard