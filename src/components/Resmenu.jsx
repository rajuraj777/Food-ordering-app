import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import { VEG_SYMBOL } from "../utils/constants";
import useRestaurantData from "../utils/useRestaurantData";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../utils/CartSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Resmenu = () => {
  // const [ResInfo, setResInfo] = useState([]);
  
  const { resId } = useParams();
  const dispatch=useDispatch();
  const cart=useSelector((store)=> store.cart.items);

  // console.log(resId);
  const ResInfo= useRestaurantData(resId);
  if (ResInfo === null || ResInfo?.data?.cards[1]?.card?.card===undefined) return <h1>Shimmer</h1>;
  const {itemCards}=ResInfo?.data?.cards[1]?.card?.card;
  const {
    name: Resname,
    avgRating: ResavgRating,
    totalRatingsString: RestotalRatingsString,
    costForTwoMessage: RescostForTwoMessage,
    cuisines: Rescuisines,
    cloudinaryImageId,
  } = ResInfo?.data?.cards[0]?.card?.card?.info;

  const showNotificationMessage = (message) => {
    toast.success(message);
 };
  
  const handleClick=(items)=>{
    dispatch(addItem(items));
    showNotificationMessage("Item added to cart.");
  };

  return (
    <div className="total-res-area dark:tw-bg-neutral-700">
      <div className="menu-wrapper">
      <div className="res-info dark:tw-bg-neutral-800 dark:tw-text-zinc-300">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" +
            cloudinaryImageId
          }
          alt=""
        />
        <div className="content-res-resmenu">
          <h1>{Resname.toUpperCase()}</h1>
          <h2>{ResavgRating+" "}<i className="ri-star-s-fill"></i></h2>
          <h2>{RestotalRatingsString}</h2>
          <h2>{RescostForTwoMessage}</h2>
          <h2>{Rescuisines.join(",")}</h2>
        </div>
      </div>
      <button id="pure-veg" aria-label="pure-veg">Pure Veg</button>
      <div className="menu-res ">
        {
          itemCards.map((items,index)=>{
           return (
            <div key={Resname+items?.card?.info?.description+ResavgRating+index} className="cover ">
            
            <div className="res-menu-item-card dark:tw-bg-neutral-800">
              
              <img className="itemimg "
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  items?.card?.info?.imageId
                }
                alt=""
              />
              
            
            <div className="res-menu-item-desc dark:tw-bg-neutral-800 dark:tw-text-zinc-300">
              <h1 >{items?.card?.info?.name}</h1>
              <h2 id="hcat">{items?.card?.info?.category}</h2>
              <h2 id="hdesc">{items?.card?.info?.description}</h2>
            </div>
            <div className="res-menu-item-price">
              <div className="priceratingjodi tw-mt-[-25px]  sm:tw-mt-0 ">
                <button className="tw-w-full tw-mt-1  tw-px-0 tw-py-[2px] tw-rounded-lg" onClick={()=>handleClick(items)}>Add</button>
                <h2 id="resh2">&#8377;{items?.card?.info?.price}</h2>
                <h2 className="resh2">{items?.card?.info?.ratings?.aggregatedRating?.rating+" "}<i className="ri-star-s-fill"></i></h2>
                
              </div>
              {items?.card?.info?.isVeg==true?<img id="vegi"src={VEG_SYMBOL} alt="vegetarian-food-symbol"/>:""}
            </div>
          </div>
          </div>
           )
          })
        }
      </div>
      <div className="menu-res">
        {
          
          itemCards.map((items,index)=>{
            let modifiers = [
              'Exquisite Special',
              'Signature Delight',
              'Gourmet Creation',
              'Epicurean Favorite',
              'Premiere Selection',
              'Elite Indulgence',
              'Distinctive Offering'
            ];
           return (
            <div key={Resname+items?.card?.info?.description+ResavgRating+index*100+1} className="cover">
            
            <div className="res-menu-item-card dark:tw-bg-neutral-800">
              
            <img className="itemimg"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                items?.card?.info?.imageId
              }
              alt=""
            />
            <div className="res-menu-item-desc dark:tw-bg-neutral-800 dark:tw-text-zinc-300">
              <div className="combo">
                <h1 >{items?.card?.info?.name + " " }</h1>
                <button id="add" aria-label="add btn"> {modifiers[index]}</button >
              </div>
              <h2 id="hcat">{items?.card?.info?.category}</h2>
              <h2 id="hdesc">{items?.card?.info?.description}</h2>
            </div>
            <div className="res-menu-item-price">
              <div className="priceratingjodi tw-mt-[-25px]  sm:tw-mt-0">
                <button className="tw-w-full tw-mt-1  tw-px-0 tw-py-[2px] tw-rounded-lg">Add</button>
                <h2 id="resh3">&#8377;{(items?.card?.info?.price+180).toFixed(1)}</h2>
                <h2>{items?.card?.info?.ratings?.aggregatedRating?.rating+" "}<i className="ri-star-s-fill"></i></h2>
              </div>
              {items?.card?.info?.isVeg==true?<img id="vegi"src={VEG_SYMBOL} alt="vegetarian-food-symbol"/>:""}
            </div>
          </div>
          </div>
           )
          })
        }
      </div>
    </div>
    </div>
  );
};
export default Resmenu;
