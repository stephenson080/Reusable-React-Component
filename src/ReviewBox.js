import React from "react"
import Form from "./Form"
const reviewBox = (props) =>{
    let form;
    if (props.items instanceof Object && props.items instanceof Array){
        form = props.items.map(data =>{
            if (typeof data === "object"){
                console.log(typeof data)
                return Object.keys(data).map(dat =>{
                    return <Form key = {dat} data ={data[dat]}/>
                })
            }else{
                return <Form key ={data} data = {data} />
            }
        })
    }    
    else if (!(props.items instanceof Object && props.items instanceof Array) && typeof props.items === "object"){
        form = Object.keys(props.items).map(data=>{
            if (typeof props.items[data] === "object"){
                return Object.keys(props.items[data]).map(dt=>{
                    return <Form data = {props.items[data][dt]} key = {dt}/>
                })
            }else{
                return <Form data = {props.items[data]} key = {data}/>
            }
        })
    }    
    else {
        form = <Form data = {props.items}/>
    }
    return(
        <div>
            {form}
        </div>
    )
}
export default reviewBox