import React, {FormEvent, useState} from "react";
import {Tour} from "../model/Tour";
import "../Styling/AddTour.css"
import AddSingleTour from "../hook/AddSingleTour";



export default function AddTour() {

    const{postSingleTour}=AddSingleTour()

    const [addTour, setAddTour] = useState<Tour>();

    const [state, setState] = React.useState({
        title: "",
        description: "",
        category: ""
    })


    const handleSubmit =  (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state)
        postSingleTour(addTour as Tour)
    }

    function handleChange(evt: any) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        })
    console.log(state)
        setAddTour({title: state.title, description: state.description, category: state.category, id: "ABCD123", endLatitude: 12.123, endLongitude: 12.123, startLatitude: 12.123, startLongitude: 12.123})
    }

    return(
        <div>
                <form onSubmit={handleSubmit} >
                    <h1>share Tour - share Moments</h1>
                    <label>Title</label>
                    <input type="text" value={state.title} onChange={handleChange} name="title" />
                    <label>Category</label>
                    <input type="text" value={state.category} onChange={handleChange} name="category" />
                    <label>Description</label>
                    <input type="text" value={state.description} onChange={handleChange} name="description" />
                    <button onClick={handleChange}>share your Moment</button>
                </form>
        </div>
    )

}