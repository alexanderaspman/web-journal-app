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
        

  const id = context.query.id // Get ID from slug `/book/1`
  const paragraphs = req.data.topic[id]
  

  // If routing to `/book/1?name=some-book`
  console.log(context.query) // Outputs: `{ id: '1', name: 'some-book' }`
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
    console.log(paragraphs)
    console.log("data")
    return (
      <div>
      <main>
     <div className={styles.hero_img }></div>
      <div className={styles.container}>
        <div className={"row-80"}>
          <section>
            <h1>{title}</h1>
            
          </section>
        </div>
        <section className={styles.context}>
          <div className='flex flex-row gap-y-0.5 gap-x-10'>
            {context}
       </div>
        </section>
      
        
        </div>
        </main>
        </div>
        )
  }
  export default Home




  /*


{project.map((value:any|[])=>{
          return(<p className={styles.preamble}>{value}<br/></p>)
        })}



 {images.map((value:any|[])=>{
          return(<div><img src={value.url}/></div> )
        })}



  export async function getStaticPaths<GetStaticPaths>() {
    const req = data
    const res = req.data as any
        const paths = res.map((value:any|[]) =>({
      params: {id: value.data.toString()},
  }))
      return {
   
     paths,
     fallback: false
     // with i18n configured the locale for the path can be returned as well
      
      // See the "paths" section below       { params: {id:1, language: "en", slug: 'category-slug-1' } },

    

     // false or "blocking"
  }
}
   */