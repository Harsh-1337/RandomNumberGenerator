import React, { useState } from "react";
import styled from "styled-components";
import Output from "./Output"
const MyForm = styled.form`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
background-color:#83BD75;
height:80vh;
padding:3rem 0;
 label{
     color:white;
     font-family: 'Quicksand', sans-serif;
     font-size:2.5rem;
     margin:1rem;
 }
 input{
     font-size:2rem;
     border:none;
 }
 .mylabel{
     display:block;
 }
 .submit{
        margin:2.5rem;
        background:#E9EFC0;
        font-family: 'Quicksand', sans-serif;
        color:#4E944F;
         cursor: pointer;
 }
 
`
const Form = ()=>{
    const [inputObj,setInputObj] = useState({"count":10,"lowerBound":0,"upperBound":100});
    const[flag,setFlag] = useState(false);
    const handleChange = (e)=>{
        var input = e.target.name;
        var value = e.target.value;
        if(input==="count"){
            setInputObj({...inputObj,"count":value});
        }
        else if(input==="lowerBound"){
            setInputObj({...inputObj,"lowerBound":value});
        }
        else{
            setInputObj({...inputObj,"upperBound":value});
        }
        setFlag(false);
    }
    
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputObj.count<0) {
            alert("Count of numbers cannot be neagative");
        }
        else if (inputObj.lowerBound-inputObj.upperBound>=0) {
            alert("Lower bound should be less than Upper bound");
        }
        else{  
            setFlag(true);
        }
       
    }
  if (flag===true) {
       return (
         <Output input = {inputObj} reset={setFlag} />
   );
  }
  else{
       return ( 
       <MyForm onSubmit={handleSubmit}>
       <label className="mylabel" htmlFor="">Number of random numbers to be generated:</label>
       <input type="number" name="count" id="count"  onChange={handleChange}  value={inputObj.count}/>
       <label  className="mylabel" htmlFor="">Enter the range of numbers:</label>
       <div>
       <label htmlFor="">Lower Bound -</label>
       <input type="number" name="lowerBound"  onChange={handleChange} value={inputObj.lowerBound}/>
       <label htmlFor="">Upper Bound -</label>
       <input type="number" name="upperBound"   onChange={handleChange} value={inputObj.upperBound} />
       </div>
       <input  className="submit" type="submit" />
       </MyForm>
   )
  }  
 
}

export default Form;
