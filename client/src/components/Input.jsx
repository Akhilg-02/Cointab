import { useState } from "react"


export const Input = () =>{
    // const [weight , setWeight] = useState();
    const [down , setDown]  = useState([]);
    const [data , setData] = useState({
        weight:"",
        pin:"",
    });

    console.log(data);
    const handleSubmit = (e) =>{
        e.preventDefault();

       // const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const formData = {...data};
        //formData[fieldName] = fieldValue;

        setData(formData);
    }
    
    return(
        <div>
            <form action="" onClick={handleSubmit}>
                <input placeholder="Weight" name="weight"  type="text" />
                <input placeholder="Enter pin" name="pin"   type="text" />
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
                </select>
                <input type="submit"/>

        
            </form>
           
       
        </div>
    )
}