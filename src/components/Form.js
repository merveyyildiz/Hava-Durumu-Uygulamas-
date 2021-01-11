import React from 'react'

export default function Form(props) {
    return (
        <form   onSubmit={props.handleSubmit}>
        <div className="input-group">
            <input className="form-control animate__animated animate__swing border-success" name="city" type="text"></input>
            <button className="btn btn-outline-success animate__animated animate__fadeInRight">Getir</button>
        </div>
        </form>
    )
}
