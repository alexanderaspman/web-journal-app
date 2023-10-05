import { useEffect, useState } from "react";
import { Control,useFieldArray, useForm,useWatch } from "react-hook-form";
import data from '@/mock-server/data.json'
import styles from './addEntry.module.scss'
type FormValues = {
    topic:{
      
            
        entryTitle:'',
         context:'',
     }[]
     
 
}


let renderCount = 0;



const Input = (props:any) =>{
    const [value,setValue]=useState(props.value||"")
    return(
        <input 
        name={props.entryTitle}
        onChange={(e)=>{setValue(e.target.value);
        props.onChange && props.onChange(e);
    }}
    value={value}
        />
    )
}


export default function AddEntry(){

    //this will set the query string parameters to topic.entryTitel and topic.context
    const {register,handleSubmit,control,formState,formState:{errors}} = useForm<FormValues>({
        mode:"onChange",
        defaultValues:{
        topic:[{
      
            
               entryTitle:'',
                context:'',
            }]
            
        
    }});
  
    const {fields}=useFieldArray({
        entryTitle:'topic',
        control,
    })
    const onSubmit = async (data:any)=>{await sleep(1000)}
    renderCount =  data.data.topic.length + 1
    console.log("errors",errors)


    return(
        <div>
           
<form 
onSubmit={(data)=>{
console.log("Submit data",data);
}}>
            <input {...register(`topic.${renderCount}.entryTitle`,{required:true})}
          
            placeholder="Enter title"
            /><br/>
              <input {...register(`topic.${renderCount}.context`,{required:true})}
              placeholder="Enter your journal entry"
              />
        
<button type="submit">Add entry</button>
</form>
        </div>
    )

}
