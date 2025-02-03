import { useEffect, useState } from "react";
import { ten, eleven, twelve } from "../utils/api/a";
import { first, second, third } from "../utils/api/d";
import { five, four, six } from "../utils/api/b";
import { nine, seven, eight } from "../utils/api/c";
const useRestaurantData =(resId)=>{
   const [ResInfo,setResInfo]=useState([]);
   useEffect(() => {
      fetchmenudata();
    }, []);
  
    const fetchmenudata = async () => {
  
      if (resId === "866351") {
        setResInfo(first);
      }
      else if (resId == "553611") setResInfo(second);
      else if (resId == "702996") setResInfo(third);
      else if (resId == "177301") setResInfo(four);
      else if (resId == "742193") setResInfo(six);
      else if (resId == "177284") setResInfo(five);
      else if (resId == "177308") setResInfo(seven);
      else if (resId == "177302") setResInfo(eight);
      else if (resId == "126282") setResInfo(nine);
      else if (resId == "127181") setResInfo(ten);
      else if (resId == "291882") setResInfo(eleven);
      else if (resId == "555827") setResInfo(twelve);
      else {
        setResInfo(null);
      }
    };
    return ResInfo;
}
export default useRestaurantData;