import { useState } from "react";

const User=(props)=>{
   const count1=useState(0);
   const count2=useState(2);
   return(
      <>
         <h1>{props.name}</h1>
         <h2>{props.displayed}</h2>
         <p>{count1}{count2}</p>
      </>
   );
}
export default User;