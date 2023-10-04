import { GetStaticProps } from "next"
import dataBase from '@/mock-server/data.json'
import { useState } from "react"
import Pagination from '@/components/Pagination'
import {paginate} from '@/helper/paginate'
import Wrapper from '@/components/Wrapper'
import styles from './home.module.scss'

  export const getStaticProps:GetStaticProps= async()=>{
const req = //response
await dataBase//request
    return{
        props:{
           req
        }
    }
}
///importing the response
  function JournalEntryList<getStaticProps>  (req:any){
    const [currentPage,setCurrentPage] = useState(1)
    const pageSize = 5
    const onPageChange= (page:number) => {
        setCurrentPage(page)
    }



    const [res,setRes]:any|any[] = useState( req)
    const entries:any|[] = res.req.data.topic
   
   
    const items = entries.length
    const paginatedPosts = paginate(entries, currentPage, pageSize);

        console.log("res",res)
        console.log("items",items)
    console.log("request",req)
    console.log("entries",entries)
    return(<Wrapper><div className={styles.container}>
{paginatedPosts.map((value:any|any[])=>{
  
const node = value.id
const entryTitle = value.entryTitle
const context = value.context
console.log("entryTitle",entryTitle)

return(<div key={node} style={{backgroundColor:"grey"}}>
    <div style={{backgroundColor:"yellow", padding: 20,margin:15}}>{entryTitle} {node}</div>
    <div style={{backgroundColor:"red"}}>{context}</div>
    
    </div>)

})}
<Pagination 
items={items}
currentPage={currentPage}
pageSize={pageSize} 
onPageChange={onPageChange}
/>

    </div></Wrapper>)
}
export default JournalEntryList