import { GetStaticProps } from "next"
import dataBase from '@/mock-server/data.json'
import { useState } from "react"


  export const getStaticProps:GetStaticProps= async()=>{
const req = await dataBase

    return{
        props:{
           req
        }
    }
}

  function JournalEntryList<getStaticProps>  (req:any){
    const [res,setRes]:any|any[] = useState( req)
    const entries:any = res.req.data.topic
        console.log("res",res)
    console.log("response",req)
    console.log("entries",entries)
    return(<div>
{entries.map((value:any|any[])=>{
const node = value.id
const title = value.title
const context = value.context
console.log("title",title)

return(<div key={node} style={{backgroundColor:"gey"}}>
    <div style={{backgroundColor:"yellow"}}>{title}</div>
    <div style={{backgroundColor:"red"}}>{context}</div>
    
    </div>)

})}

    </div>)
}
export default JournalEntryList