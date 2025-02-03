import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { ten, eleven, twelve } from "../utils/api/a";
import { first, second, third } from "../utils/api/d";
import { five, four, six } from "../utils/api/b";
import { nine, seven, eight } from "../utils/api/c";
const Resmenu = () => {
  const [ResInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchmenudata();
  }, []);

  const fetchmenudata = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.795688&lng=82.194431&restaurantId=" +
    //     resId
    // );
    // const json = await data.json();
    // console.log(json);
    // if(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //   ?.card===undefined)setResInfo(null);
    // else
    //   setResInfo(json);
    if (866531) setResInfo(first);
    else if (553611) setResInfo(second);
    else if (702996) setResInfo(third);
    else if (177301) setResInfo(four);
    else if (742193) setResInfo(five);
    else if (177284) setResInfo(six);
    else if (177308) setResInfo(seven);
    else if (177302) setResInfo(eight);
    else if (126282) setResInfo(nine);
    else if (127181) setResInfo(ten);
    else if (291882) setResInfo(eleven);
    else if (555827) setResInfo(twelve);
    else {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.795688&lng=82.194431&restaurantId=" +
          resId
      );
      const json = await data.json();
      console.log(json);
      if (
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card === undefined
      )
        setResInfo(null);
      else setResInfo(json);
    }
  };
  if (ResInfo === null || ResInfo.length === 0) return <Shimmer />;
  const { itemCards } =
    ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const { cards } = ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const {
    name: Resname,
    avgRating: ResavgRating,
    totalRatingsString: RestotalRatingsString,
    costForTwoMessage: RescostForTwoMessage,
    cuisines: Rescuisines,
    cloudinaryImageId,
  } = ResInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div className="menu-wrapper">
      <div className="res-info">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" +
            cloudinaryImageId
          }
          alt=""
        />
        <h1>{Resname}</h1>
        <h2>{ResavgRating}</h2>
        <h2>{RestotalRatingsString}</h2>
        <h2>{RescostForTwoMessage}</h2>
        <h2>{Rescuisines.join(",")}</h2>
      </div>

      <div className="menu-res">
        {cards?.map((insidecards, index) => {
          return index == 0 ? (
            ""
          ) : (
            <div key={index}>
              {insidecards?.card?.card?.itemCards?.map((items) => {
                return items?.card?.info?.imageId === undefined ? (
                  ""
                ) : (
                  <div key={items.card.info.id}>
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                        items.card.info.imageId
                      }
                    ></img>
                    <h1>{items?.card?.info?.name}</h1>
                    <h2>{items?.card?.info?.category}</h2>
                    <h2>{items?.card?.info?.isVeg}</h2>
                    <h2>{items?.card?.info?.price / 100}.</h2>
                    <h2>{items?.card?.info?.description}</h2>
                    <h2>
                      {items?.card?.info?.ratings?.aggregatedRating?.rating}
                    </h2>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Resmenu;
