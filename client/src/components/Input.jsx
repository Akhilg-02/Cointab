import { useEffect, useState } from "react"

import "../components/input.css"

export const Input = () =>{
    //const [down , setDown]  = useState([]);
    const [data , setData] = useState({
        weight:"",
        pin:"",
    });

    console.log(data);
    const handleSubmit = (e) =>{
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const formData = {...data};
        formData[fieldName] = fieldValue;

        setData(formData);
    }

    const Cost = (weight , pin) =>{

        var approxWeight = Math.round(weight / 0.5) * 0.5;
        var digit = approxWeight / 0.5;

        if(digit === 0){
            return ("Please Enter the pin / weight")
        }
    }

    useEffect(()=>{
        Cost();
    })

    
    
    return(
        <div>
            <div className="form">
            <form action="" onClick={handleSubmit}>
                <label htmlFor="">Weight: </label>
                <input placeholder="Weight" name="weight"  type="text" /> <br /> <br />
                <label htmlFor="">Pin Code: </label>
                <input placeholder="Enter pin" name="pin"   type="text" /> <br /> <br />
                <label htmlFor="">Delivery: </label>
                <select name="" id="">
                    <option value="">
                            Delivery Type
                    </option>
                    <option value="">
                             Forward
                    </option>
                    <option value="">
                            Forward(RTO)
                    </option>
                </select><br /> <br />
                <input type="submit"/>
            </form>
            </div>
       
        </div>
    )
}