import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import { NextPage } from 'next';
import Cylinder from '@/components/cylinder';

const Home : NextPage = () => {
  return ( 
    <div>
      <Head>
        <title> cyl.inder | AI Generated Branding</title>
        <meta name ="description" content="Generate Branding Snippet for your product."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Cylinder />
    </div>
   );
};
 
export default Home ;
