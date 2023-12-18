"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {AiOutlineHome,AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';



export const categories = [
    'New Arrivals',
    'Men',
    'Women',
    'Children'
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('L0I3t-30p') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <> <Box
    className='center auto  bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',

        background:'white',
        border: 'none',
        position : 'fixed',
        flexGrow: 1
    }}>
      
        <AppBar
    className='center relative  flex'

            sx={{


                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
            boxShadow: 'none'
        }}>
              <Box className='flex bg white gap1 align-center items-center w100 center' sx={{
                    // maxWidth:'xl',
                    height:'20px',
            py:.45}} >
            <Typography sx={{fontSize:{xs:'.7em',sm:'.8em'}}} className='center text-center'>
            Free Delivery On Orders Over $45 In Lebanon 
            </Typography>
              
        </Box>
            <Toolbar
    className='center  flex w100  auto'

                sx={{
                    border : `1px solid #00000012`,
                background:'white',
                    maxWidth:'xl',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box
    sx={{
    mx: {
        sm: '1em'
    },
    width:{xs:'90px',sm: '120px'}
}}>
    <img
        className='img'
        src={`/icon.png`}
        alt="phoenix-blaze logo"/>
</Box>
</Link>
<NavButtom/>

               
            

               

                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex'
                    // ,md:'none'
                }
                    ,

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
                             
                             <IconButton
                            onClick={() => router.push('/')}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                            display: {
                                // md: 'none'
                            }
                        }}>
                            <AiOutlineHome color='black'/>
                        </IconButton>
                        {/* <IconButton
                            onClick={() => router.push('/profile')}
                            sx={{
                            color: 'black'
                        }}>

                                <AiOutlineHeart color='black'/>
                          
                        </IconButton> */}
                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <AiOutlineShoppingCart color='black'/>
                            {/* </Badge> */}
                            {/* <Typography>
                                Cart
                            </Typography> */}
                        </IconButton>
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                // md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>

                {/* <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    flexWrap: 'wrap',
              
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                    }}
                        className='flex right'>
 
 <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton>
              

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                                <CiShoppingCart color='black'/>
                      
                            </IconButton>



                            <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                         
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                    
                    </Box>

                </Box> */}
             <SearchInput
mobile
                    /> 
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}