// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
type Data = {
  name: string
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  if (req.method === 'POST') {
    console.log("post")
   
    res.status(200).json({ name: 'post' })

  } else {
    res.status(200).json({ name: 'John Doe' })

  }
} 
