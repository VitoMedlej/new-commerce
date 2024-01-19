"use client"
import { Box } from '@mui/material';
import React from 'react'
import {FaFacebook ,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
        Icon:FaInstagram,
        href:'https://www.instagram.com/phoenix.blaze.lb/'
    },
    {Icon:FaWhatsapp,href:'https://wa.me/+961123456'},
    {
      Icon :BsTiktok ,href: `tiktok.com/@phoenix-blazelb`,
    },
    {

    Icon:FaFacebook,   href:'https://www.facebook.com/profile.php?id=100087524961925&mibextid=9R9pXO'
}]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{zIndex:1234567,maxWidth:'200px',mt:2,...sx}}>

    {sm.map((item)=>{
      return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>

      <img src={`${item?.Icon}`} alt="" className="img" />
         </a>
    })}
    </Box>
  )
}

export default SMicons