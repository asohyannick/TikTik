import type { NextPage } from 'next';
import axios from 'axios';
import { Video } from '../types.d';
interface IProps {
  videos:Video[]
}
export default function Home({ videos } : IProps) {
  console.log(videos); 
  return (
    <h1 className="text-3xl font-bold underline">
    
  </h1>
  )
}

// The way w e fetch data in Next Js is by using a function called getServerSideProps

export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);
  console.log(data.msg.name);
  return {
    props:{
      videos:data
    }
  }
}
