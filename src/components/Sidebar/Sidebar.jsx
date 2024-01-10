import "./Sidebar.css"
import Logo  from "../../Assests/Logo.png"


import { MdOutlineHome } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlineWidgets } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiWallet3Line } from "react-icons/ri"

const Sidebar = () => {

  return (
    <>
      <div className="col-md-2 leftMenu">
      <div className="row">
        <div className="col-4">
    <img src={Logo}style={{width:"30px",height:"auto"}} alt="" /></div>
    <div className="col-8">
    <p className="txtWhite"  style={{color:"#fff",cursor:"pointer",fontSize:"1rem",fontWeight:"00"}}>Nishyan</p>
    <p className="txtWhite"  style={{color:"#fff",cursor:"pointer",fontSize:"0.8rem",fontWeight:"00",textDecoration:"underline"}}>Visit Store</p>
    </div>
    </div>
        <div className="leftNavigation" style={{fontSize:"1.6rem"}}>
      <div className="voiceAnalysis row"
     >
      <MdOutlineHome className="col-3 mt-2"/> <p className="col-9">Home</p> 
      </div>
      <div className="voiceAnalysis row"
     >
      < MdOutlineEventNote className="col-3 mt-2"/> <p className="col-9">Orders</p> 
      </div>
      <div className="voiceAnalysis row"
     >
      <MdOutlineWidgets className="col-3 mt-2"/> <p className="col-9">Products</p> 
      </div>
      <div className="voiceAnalysis row"
     >
      <CiDeliveryTruck className="col-3 mt-2"/> <p className="col-9">Delivery</p> 
      </div>
      <div className="voiceAnalysis row"
     >
      < HiOutlineSpeakerphone className="col-3 mt-2"/> <p className="col-9">Marketing</p> 
      </div>
      <div className="voiceAnalysis row"
     >
      <TbBrandGoogleAnalytics className="col-3 mt-2"/> <p className="col-9">Analytics</p> 
      </div> 
    <div className="voiceAnalysis row"
     >
      < MdAttachMoney className="col-3 mt-2"/> <p className="col-9">Payouts</p> 
      </div>
      <div className="ChatSupport row"
 >
      <CiDiscount1 className="col-3 mt-2"/> <p className="col-9">discounts</p> 
      </div>
      <div className="Tourism row" 
      >
      <IoPeopleOutline className="col-3 mt-2"/> <p className="col-9">Audience</p> 
      </div>    
      <div className="IVRS row" 
      >
       
      <IoIosColorPalette className="col-3 mt-2"/> <p className="col-9">Appearance</p>
      </div>
      <div className="IVRS row" 
      >
       
      <AiOutlineThunderbolt className="col-3 mt-2"/> <p className="col-9">Plugins</p>
      </div>
      <div className="row IVRS">
        <div className="col-3"><RiWallet3Line  style={{alignItems:"center",
      justifyContent:"center",textAlign:"center"}}/></div>
        <div className="col-9">  <div className="row">hello1</div>
          <div className="row">hello2</div></div>
       
        
      </div>
     </div>
     </div>
     </>
  )
}

export default Sidebar