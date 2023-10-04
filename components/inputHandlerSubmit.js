import {  useState } from "react"


export const Button = (formSubmitHandler)=>{
    return(<button onClick={()=>{formSubmitHandler}} >click me</button>)
}

const ProductList =(e)=>{


const [enteredentryTitle,setentryTitle] = useState('')
const [enteredContext,setContext] = useState('')
const [isValid,setIsValid] = useState(true)

const entryTitleChangeHandler=(e)=> {
console.log(...e.target.value)
setentryTitle(e.target.value)
}
const contextChangeHandler=(e)=> {
    console.log(...e.target.value)
    setContext(e.target.value)
    }
 

const formSubmitHandler=()=>{
    console.log('handler')
e.preventDefault();
if (enteredentryTitle.trim()||enteredContext.trim() === 0 ){
    setIsValid(false);
    
     
}
if (enteredContext.length()&&enteredentryTitle.length() <= 501){
setIsValid(false)
}
else {
      isValid && formSubmit
}
}
const formSubmit=()=>{
    const journalData = {
        entryTitle: enteredentryTitle,
        context:enteredContext,
        date: new Date,
        id: FileSystemEntry.length +1
        
    };

    setentryTitle('')
    setContext('')
}

    return(<div><form style={{
        margin:'0.5rem 0',
    
    }} onSubmit={formSubmitHandler}>
<div>
        <input defaultValue={enteredentryTitle} style={{color:"black"}} type="text" onChange={entryTitleChangeHandler} />
        <br/>
        <input defaultValue={enteredContext} type="text" onChange={contextChangeHandler} />
        </div>
        <Button formSubmitHandler/>
        </form>
    </div>)
}
export default ProductList