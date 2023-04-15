import Image from "next/image";
// import logo  from "../public/png-transparent-airbnb-logo-coupon-privately-held-company-airbnb-logo-text-trademark-service-thumbnail.png"
function Header()
{

     return (
         <header>
            {/* left section */}
            <div className="relative flex item-center h-10 cursor-pointer">
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="right" />
             </div>
            {/* middlw */}
            <div></div>
            {/* right */}
            <div></div>
         </header>
     )
}

export default Header;