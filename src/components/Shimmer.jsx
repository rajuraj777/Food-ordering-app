import ShimmerCard from "./Shimmer-card";
const Shimmer = () => {
  return(
    
   <div className="wrap">
    <div className="form-container shimmer-banner tw-w-full tw-h-60 tw-mt-0">
      <div className="search">
        <input type="text" placeholder="Search for Restaurants ..." />
        <button id="search-btn" aria-label="searchbtn">
          <i className="ri-search-line"></i>
        </button>
      </div>
      <div className="filter">
        <button id="filter-btn" aria-label="filterbtn">
          <i className="ri-filter-line"></i>
        </button>
      </div>
    </div>
    <div className="shimmer-card2 tw-w-full tw-h-40  tw-whitespace-nowrap tw-overflow-x-scroll tw-relative" style={{ scrollbarWidth: 'none' }}>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
      <div className="shimmer-image2 tw-inline-block tw-rounded-full tw-w-[135px] tw-h-5/6 tw-my-3 tw-mx-2 "></div>
    </div>
    <div className="res-container">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  </div>
  )
};
export default Shimmer;
