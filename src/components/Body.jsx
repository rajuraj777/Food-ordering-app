import ResCard, { ResCardWithPromotedLabel } from "./ResCard";
import { useContext, useEffect, useState } from "react";
import { SWIGGY_API, SWIGGY_API3 } from "../utils/constants";
import Shimmer from "./Shimmer";
import ResList from "../utils/mockData";
import { Link } from "react-router-dom";
import { grid } from "../utils/api/grid";
import { useRef } from "react";
import UserContext from "../utils/UserContext";
let flag = false;
const Body = () => {
  const [List, setList] = useState([]);
  const [orig, setorig] = useState([]);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const data = await fetch(SWIGGY_API3);
    // const json = await data.json();
    // console.log(json);
    // setList(ResList);
    // setorig(ResList);
    await setTimeout(() => {
      setList(ResList);
      setorig(ResList);
    }, 500);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight - 300
    )
      return;

    setList([...List, ...List]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });



  const PromotedRest=ResCardWithPromotedLabel(ResCard);

  const gridData=grid?.imageGridCards?.info;

  const sectionsContainerRef = useRef(null);

  const scrollToSection = (direction) => {
    const container = sectionsContainerRef.current;
    const scrollAmount = Math.max(window.innerWidth / 5, 300);
    if (direction === 'next') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === 'prev') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };



  // const {loggedUser,setuserName}=useContext(UserContext);

  return orig.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="wrap dark:tw-bg-neutral-700 ">
      
      <div className="form-container tw-w-full tw-h-60 tw-mt-0  tw-bg-hero2 md:tw-bg-hero tw-bg-[cover]"   >
        
        <div className="search tw-absolute">
          <input
            type="text"
            placeholder="Search for Restaurants ..."
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                const filteredList = orig.filter((res) => {
                  return (
                    res.info.name
                      .toLowerCase()
                      .includes(SearchText.toLowerCase().trim()) ||
                    res.info.cuisines
                      .join("")
                      .toLowerCase()
                      .includes(SearchText.toLowerCase().trim())
                  );
                });
                setList(filteredList);
              }
            }}
          />
          <button
            id="search-btn"
            aria-label="search"
            onClick={() => {
              const filteredList = orig.filter((res) => {
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase().trim()) ||
                  res.info.cuisines
                    .join("")
                    .toLowerCase()
                    .includes(SearchText.toLowerCase().trim())
                );
              });
              setList(filteredList);
            }}
          >
            <i className="ri-search-line"></i>
          </button>
        </div>
        
        <div className="filter">
          <button
            id="filter-btn"
            aria-label="filter"
            onClick={() => {
              // console.log(flag);
              const filteredList = orig.filter((res) => {
                if (!flag) {
                  return res.info.avgRating >= 4.5;
                } else {
                  return res;
                }
              });
              setList(filteredList);
              flag = !flag;
              // console.log(flag);
            }}
          >
            <i className="ri-filter-line"></i>
          </button>
        </div>
      </div>
      <div className="tw-w-full sm:tw-w-11/12  tw-h-40  tw-whitespace-nowrap tw-overflow-x-scroll tw-relative tw-m-auto" style={{ scrollbarWidth: 'none' }} ref={sectionsContainerRef}>
            {gridData.map((data)=>{
              return(
                <img className="tw-object-cover tw-h-full circimg" key={data?.id} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+data?.imageId }></img>
              )
            })}
            
      </div>
      <div className="tw-w-full tw-relative tw-mt-[-100px] tw-mb-[100px]">
        <div className="buttons-container tw-w-full tw-absolute tw-top-0 tw-right-0  tw-flex tw-justify-between  " >
            <button className="tw-text-xl tw-rounded-full tw-bg-blue-500  tw-border-none tw-cursor-pointer tw-w-10 tw-mx-5 tw-mb-10 tw-font-bold"onClick={()=>scrollToSection('prev')}>←</button>
            <button className="tw-text-xl tw-rounded-full tw-bg-blue-500  tw-border-none tw-cursor-pointer tw-w-10 tw-mx-5 tw-mb-10 tw-font-bold"onClick={()=>scrollToSection('next')}>→</button>
        </div>
      </div>
      {/* <input className="tw-border-black" value={loggedUser} onChange={(e)=>setuserName(e.target.value)} ></input> */}
      <div className="res-container ">
        {List.map((restaurant, i) => {
          return (
            <Link
              key={restaurant.info.id + i}
              className="menulink"
              to={"/restaurant/" + restaurant.info.id}
              aria-label="Linking Restraunt cards"
            >
              {/* <ResCard resData={restaurant} /> */}
              {restaurant.info.avgRating>=4.5?
              <PromotedRest resData={restaurant}/>:<ResCard resData={restaurant}/>}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
