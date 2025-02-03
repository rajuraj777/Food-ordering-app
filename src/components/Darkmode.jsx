import React, {useEffect, useState } from "react";
const Darkmode=({darkMode,setdarkMode})=>{
   useEffect(()=>{
      if(darkMode){
         document.documentElement.classList.add('tw-dark');
      }
      else{
         document.documentElement.classList.remove('tw-dark');
      }
   },[darkMode])
   const toogle=()=>{
      const newmode=!darkMode;
      setdarkMode(newmode);
   }
   return(
      <>
      <button onClick={toogle} className="tw-bg-blue-500 dark:tw-bg-amber-400 tw-text-white dark:tw-text-neutral-700  tw-w-10 tw-m-0 tw-p-0 tw-text-lg  hover:tw-bg-blue-600 dark:hover:tw-bg-amber-300 hover:tw-text-white tw-border-none">
         {darkMode?<i className="ri-sun-fill"></i>:<i className="ri-moon-fill"></i>}
      </button>
      </>
   )
}
export default Darkmode;
