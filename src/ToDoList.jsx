import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from "./ListComp";

 //value is written in input filled for empty the input field after clicking

const ToDoList=()=>{


    const[item,setItem]=useState(" "); //for showing in input field
    const[newItem,setNewItem]=useState([]);   //for storing items in an array

    const writeEvent=(e)=>{
        setItem(e.target.value);
    }

    const byClicking=()=>{
        setNewItem((prevItem)=>{
            return [...prevItem,item];
        })

        setItem("")
    }

    return(
        <div className="main_div">
            <div className="center_div ">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add an Item" onChange={writeEvent}  value={item}/>
                <Button claassname="newBtn" onClick={byClicking}><AddIcon/></Button>
                <br/>
                <ol>  
                    {   newItem.map((val,index)=>{
                        return <ListComp key={index} text={val}/>
                    })}
                </ol>
                <br/> 
            </div>

        </div>
    )
}

export default ToDoList;