import FixedNavbar from './FixedNavbar';
import SideBar from './SideBar';
import Head from 'next/head';

function Layout(props){
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols:wght@400;500;600;700;800;900&family=Pacifico&display=swap" rel="stylesheet" />

             {/* font Ar  */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
            
        </Head>
         <FixedNavbar />
         <SideBar /> 
         {props.children}
        </>
    )
}

export default Layout;