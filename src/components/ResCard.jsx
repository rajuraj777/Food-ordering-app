import { CDN_URL ,VEG_SYMBOL} from "../utils/constants";

const ResCard = (props) => {
   const { resData } = props;
   const {
     cloudinaryImageId,
     name,
     cuisines,
     costForTwo,
     avgRating,
     deliveryTime,
     veg,
   } = resData?.info;
   return (
     <div className="res-card dark:tw-bg-neutral-800 dark:tw-text-zinc-300 dark:tw-border-neutral-800 dark:hover:tw-border-zinc-200">
       <img
         src={CDN_URL
            +
           cloudinaryImageId
         }
         alt="food"
       ></img>
 
       <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4 id="star">
         {avgRating} <i className="ri-star-fill"></i>
       </h4>
       <h4>{costForTwo}</h4>
       
       {veg === true ? <img id="vegi"src={VEG_SYMBOL} alt="vegetarian-food-symbol"/> : ""}
     </div>
   );
 };
 /*
 *HIGHER ORDER COMPONENTS
 *input->component 
 *output->component
 */ 
 export const ResCardWithPromotedLabel=(ResCard)=>{
  return(props)=>{
    return(
        <>
          <div className="tw-relative tw-w-full tw-flex">
        <ResCard className="" {...props} />
        <label className="tw-absolute tw-text-white tw-bg-amber-600 tw-rounded-lg tw-z-5 tw-mx-3 tw-my-2 tw-p-2 
        tw-top-3 tw-left-2 sm:tw-mx-5 md:tw-left-3" >
          Recommended
        </label>
      </div>
      </>
    )
  }
 }
 export default ResCard;