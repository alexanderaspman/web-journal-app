import { GetStaticProps } from "next"
import dataBase from '@/mock-server/data.json'
import { useState } from "react"
import Pagination from '@/components/Pagination'
import {paginate} from '@/helper/paginate'
import Wrapper from '@/components/Wrapper'
import styles from './home.module.scss'
import Link from "next/link"
import TrashButton from "@/assets/deletButton"
interface Data{
    id:number
    entryTitle:string
    context:string
}

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



    const [res,setRes]:any = useState<Data[]>( req)
    const [entries,setEntries]:any|[] = useState(res.req.data.topic)
    const deleteObject = (id: number) => {
        const updatedData = entries.filter((item:any) => item.id !== id);
        setEntries(updatedData);
    };
    
   
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


return(<div key={node} className={styles.item}>

        <div className={styles.item__header}>
        <h2>
        <Link href={`home/${node}`}>
            {entryTitle}
        </Link> 
         </h2>
            <span onClick={()=>deleteObject(node)}>{node}</span>
        </div>
        <div className={styles.item__content}>{context}</div>
    
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