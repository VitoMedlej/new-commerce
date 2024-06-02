
import PreLoader from "@/Components/PreLoader"
import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"

const fetchFn= async () => {
try{
    
  // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`)
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{next:{revalidate:0}})
  let res = await req.json()
  if (res) return res
}
catch(e){
  console.log('e: ', e);

}
}
export default async function Home() {
// export default  function Home() {


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

      // console.log('res: ', res);
      // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/99610321-b6ca-48b7-a4e1-6103923a30da/basket/Images`,{cache:'no-store', next: { revalidate: 0 } })

      // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/11c7944e-bdec-4962-bcad-f24fe432bca6/basket/Images`,{ next: { revalidate: 400 } })
      // let resImages : any = reqImages && await  reqImages.json();
      // let res = {data:null}

        let resImages = {
          MainCarousel: [
            {
              img: "https://ucarecdn.com/401b7064-5775-4200-91a3-59fd170294c5/RolexDesk1920x6553.webp",
              text: ""
          },
          {
              img: "https://ucarecdn.com/57ed3c26-f5de-47c3-a5f3-fb052a7d48c3/DecTudorDesk1920x655.webp",
              text: ""
          },
          ]
      };
      const res = await fetchFn()
      return (
        <PreLoader resImages={resImages || null} data={res?.data}/>
       )
 

}
    


