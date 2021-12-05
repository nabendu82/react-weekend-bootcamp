import React from 'react'
import './stylesheets.css'

const paraStyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS StyleSheets</h1>
            <p className="secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae enim consectetur cupiditate unde. Deleniti fugiat repellendus ullam voluptas temporibus totam beatae suscipit, praesentium neque eos sed, eveniet veniam sint nam?</p>
            <p style={paraStyled}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio tempore nostrum natus minus accusamus dolores et animi saepe quidem!</p>
            <p style={{ color: 'red', fontWeight: 'bolder' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, minima omnis corrupti dolorum itaque fugit modi debitis adipisci excepturi earum quia quae rem quas tempore vel, quam, blanditiis deleniti delectus? Culpa vitae nostrum earum odio vero ullam harum cum a!</p>
        </>
    )
}

export default StyleSheets
