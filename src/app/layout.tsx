import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
import Popup from '@/Components/Popup/Popup'

export const metadata = {
    title: 'Phoenix Blaze - Online Shop for Fashion Accessories in Lebanon',
    description: `Phoenix Blaze is your one-stop destination for trendy and affordable fashion accessories in Lebanon. Shop online for earrings, necklaces, bracelets, rings, scarves, bags, and more.`,
    icons: {
        icon: `https://ucarecdn.com/92560bb1-4dac-49ac-8571-f69c27574e0b/phoenixblaze.PNG`
    },
    keywords: "fashion accessories, online shopping, lebanon, jewelry, scarves, bags"
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <Popup/>
                    <main style={{marginTop:6}}>

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
