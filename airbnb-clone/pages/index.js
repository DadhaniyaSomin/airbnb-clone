import Head  from "next/head";
import Header from "../componants/Header";

const HomePage = () =>{
     return (
         <div className="">
             <Head>
                 <title> Airbnb</title>
             </Head>

             {/* Header  */}
             <Header />
             {/* banner */}

         </div>  
     )
}

export default HomePage;