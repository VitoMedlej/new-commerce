
import PreLoader from "@/Components/PreLoader"
import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"

export default async function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })


//    const InitialFetch = async () => {
//     try {
  
//       const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
//       const res = await req.json()
    
//       if (res?.success && res?.data) {
//         setData(res?.data)
//       }
//       return null
//     }
//     catch(er) {
//       console.log('er getAll: ', er);
  
//     }
//   }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
try {

      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
      const req = await fetch(`https://www.phoenix-blaze-lb.com/api/get-data`,{ cache: 'no-store' ,next:{revalidate:0}})
      let res = await req.json()
      // console.log('res: ', res);
      // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/11c7944e-bdec-4962-bcad-f24fe432bca6/basket/Images`,{ next: { revalidate: 400 } })
      // let resImages : any = reqImages && await  reqImages.json();
      // let res = {data:null}
        let resImages = null;
      return (
        <PreLoader resImages={resImages || null} data={res?.data}/>
       )
}
catch (e) {
  console.log('e home: ', e);
  return (
    <PreLoader resImages={null} data={ null}/>
   )

}
    


}
