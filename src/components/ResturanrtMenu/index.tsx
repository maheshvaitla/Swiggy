'use client'

import { useEffect, useState } from "react";
import Loader from "../Loader";
import useRestuarnatMenu from "../../utils/useRestuarnatMenu"



const ResturantMenu = () =>{

  const resinfo = useRestuarnatMenu();
  console.log("resinfo", resinfo)

    return  resinfo.length === 0 ? <Loader /> : (
        <>
    {resinfo.map((item:any, index: number) => (
        <div className="menu m-auto border-" key={item?.card?.info?.id}>
            <div className="card card-side bg-base-100 shadow-sm h-[180px] w-[850px] ">
             <figure>
             <img
             className="w-[180px]"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId} `} 
                 alt="Movie" />
            </figure>
  <div className="card-body p-[5px]">
    <h2 className="card-title">{item?.card?.info?.name}</h2>
    <h2 className="card-title">₹{ item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</h2>
    <h2 className="card-title">{item?.card?.info?.ratings?.aggregatedRating?.rating}</h2>
    <p>{item?.card?.info?.description}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
        </div>
    ))}
    </>
        
    )
}
export default ResturantMenu;