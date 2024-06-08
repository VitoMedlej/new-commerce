"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
// import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
// import ProductReview from '@/Components/ProductReview/ProductReview'
import {  Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import useCart from '@/Hooks/useCart'
import { useEffect, useState } from 'react'
import { IProduct } from '@/Types/Types'
import { useParams } from 'next/navigation'
import { server } from '@/Utils/Server'
import { QuantityPicker } from '@/Components/Shared/QuantityPicker/QuantityPicker'
import ProductReview from '@/Components/ProductReview/ProductReview'
import ColorSelector from '@/Components/ColorSelector/ColorSelector'

const Index = () => {
    const {productId} = useParams()
    const {incrementQty} = useCart()
    // const router = useRouter()
    const {addToCart}= useCart()
    const [loading,setLoading] = useState(false)
    const [selectedColor,setSelectedColor] = useState('')
    const [data,setData] = useState<{
      product: IProduct | any ;
      moreProducts: IProduct[] | never[];
    }>
    ({
      product : null,
      moreProducts : []
    })
    const [selectedQuantity,setSelectedQuantity] = useState(1)
  

    
       const InitialFetch = async () => {
        try {
          setLoading(true)
          const req = await fetch(`${server}/api/get-by-id?id=${productId}`,{ cache: 'no-store' })
          const res = await req.json()
        
          console.log('res: ', res);
          if (res?.success && res?.product) {
            setData({product:res?.product,moreProducts : res?.moreProducts})
          setLoading(false)

          }
          setLoading(false)
          return null

        }
        catch(er) {
          console.log('er getAll: ', er);
          setLoading(false)

      
        }
      }
      useEffect(() => {
        setLoading(true)
        InitialFetch()
        
        return  ()=> setLoading(false)

      }, [])

      const [swiper, setSwiper] = useState<any>(null);

      const goToSlide  = (index: number) => {
        if (swiper) {
          swiper?.slideTo(index);
        }
      };
      
  return (
     
    
      <Box sx={{px:{xs:1,sm:0},mt:'8em'}}>
 
      <BreadCrumb  />
{!loading && data?.product !== undefined && data?.product?.title ? <Grid sx={{maxWidth:'lg',mx:1,pt:{sm:2,md:2,lg:2}}} className='auto' container>
       <Grid  item xs={12}  md={6} >
         <ProductImageCarousel  images={data?.product?.images}/>
        <Box className="flex wrap justify-between between space-around" sx={{mt:1}}>

         
        
                </Box>
       </Grid>
       <Grid sx={{
        ml:{xs:0,sm:2},
        // border:'1px solid #00000029',
        px:{xs:1,sm:1.5}}} item xs={12}  md={5}>
         <Box sx={{px:{xs:0,sm:0},pt:{xs:3,sm:0}}}>
             <Typography component={'h1'} sx={{fontWeight:400,pt:1,fontSize:{xs:'1.2em',sm:'1.55sem'}}}>
              {data?.product?.title || 'Loading Product Details'}
             </Typography>
             <Typography className='gray' component={'h4'} sx={{fontWeight:400}}>
               {data?.product?.category}
             </Typography>
             {/* <Typography className='green' component={'h2'} sx={{fontSize:'1.25em',fontWeight:700}}>
               In Stock
             </Typography> */}
            
             <Typography 
                 component={'h1'} sx={{my:.25,fontWeight:500,color:'green',fontSize:{xs:'1em',sm:'1.45sem'}}}>
                 ${
                 data?.product?.price
                 }

             </Typography>
         </Box>
   
      
         
             <Box className='flex wrap ' sx={{my:2,justifyContent:'flex-start',position:'relative'}}>
              <Box>

             <QuantityPicker 
                    onChange={(e:number)=>{incrementQty(data?.product?._id,e)}}
                    
                    min={1} max={10} value={data?.product?.qty > 10 ? 10 : data?.product?.qty || 1}/>
              </Box>

             <Btn 
                      onClick={()=>addToCart(selectedQuantity,`${data?.product?._id}`,{title : data.product.title ,category: data.product.category,img:data.product.images[0], _id : data.product._id,price:data.product.newPrice ? data.product.newPrice: data.product.price, selectedColor},true,true)}
             
              sx={{gap:.5,
                borderRadius:'200px',
              color:'white',
                fontSize:{xs:'.7em',sm:'.9em'},
                // background : data?.product?.colors[0] ? `${data?.product?.colors[0]}` : 'black', 
                // borderColor : data?.product?.colors[0] ? `${data?.product?.colors[0]}` : 'black', 
             width:{xs:'49%',sm:'49%'}}}>
                 Add To Bag
             </Btn>
             {/* <Btn   sx={{background:'transparent',  
                fontSize:{xs:'.7em',sm:'.9em'},
             
             borderRadius:'200px',border:'1px solid green',color:'green',gap:.5,mt:.5,":hover":{color:'black'},width:{xs:'49%',sm:'49%'}}}>
                 WhatsApp 
             </Btn> */}
             </Box>
         <Divider></Divider>

         <Box sx={{pt:4}}>
        

         {/* { data?.product?.colors && data?.product?.colors?.length > 0 && <Box className='flex' sx={{py:2}}>
                 <Typography >
                 <strong>Colors:</strong>{' '}
                 </Typography>
             <Box  className='flex wrap row' sx={{gap:'.1em'}}>
                 {
                 
                 data?.product?.colors.map((color:string)=>{
                  return <Box className='cursor' key={color}
                  onClick={()=>setSelectedColor(color)}
                  sx={{mx:1,width:'25px',height:'25px',borderRadius:'50%',boxShadow:'1px 1px 3px gray',background:color,border:`2px solid ${color === selectedColor ? 'blue':'transparent'}`}}></Box>
                 }) }
             </Box>
              
          
         </Box>} */}
 <Typography sx={{fontWeight:400,py:.5}}>
                 Color Options:
             </Typography>
             {
              <ColorSelector options={data?.product?.colors}/>
             }


{ data?.product?.size && <Box sx={{mt:4}} >
             <Box >
                 <Typography >
                 <strong>Size:</strong>{' '}{data.product.size}
                 </Typography>
             </Box>
             {/* <Box>
                <ProductOptionSelect/>
             </Box> */}
         </Box>}
             <Typography sx={{fontWeight:400,mt:1,pt:1.25}}>
                 Product Description:
             </Typography>


             <Typography className='gray wrapped'sx={{whiteSpace:'pre-wrap',maxWidth:'100%',fontSize:'.85em',textWrap:'wrap'}}>
   {data?.product?.description}
             </Typography>
         </Box>
       </Grid>
       <Divider></Divider>

         <ProductReview /> 
       <HomeProductsCarousel Collectiontitle={"Shop More Products"} delay={3000} data={data?.moreProducts} />
   </Grid> : <Box className='flex auto center align-center' sx={{py:5}}>

<CircularProgress />
</Box> }
   </Box>
    
  )
}
export const dynamic = 'force-dynamic'
export default Index




