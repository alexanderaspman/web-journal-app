import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
import { useRouter } from 'next/router'
import styles from './home.module.scss'
import dataBase from '@/mock-server/data.json'
import { useState } from 'react'
   
  type Repo = {
    name: string
    topics: number
    data:any|[]
    req:any|[]
    res:any|[]
    id:any,
    language:string
    node:any|[]

  }
  

export async function getServerSideProps(context:any) {
    const req = //response
    await dataBase//request
        

  const id = context.query.id 
  const paragraphs = req.data.topic[id-1]
  

  
  console.log(context.query)
  return{
    props:{
        paragraphs
    }
}
}
  
  const Home=({
    paragraphs
  }: InferGetStaticPropsType<typeof getServerSideProps>)=> {
    const response = useState<any>( paragraphs)
const title = paragraphs.entryTitle
const context = paragraphs.context
const id = paragraphs.id
    console.log(paragraphs)
    console.log("data")
    return (
      <div>
      <main >
        <button>back</button>
      <div className={styles.item} style={{height:"60%"}}>

<div className={styles.item__header}>
<h2>
    {title}
 </h2>
    <span >{id}</span>
</div>
<div className={styles.item__content_big}>{context}</div>

</div>
        </main>
        </div>
        )
  }
  export default Home


