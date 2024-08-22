import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body = ({restaurantData = [] }) => {
    return (
        <div className='overallbd'>
            <div className='insidebd'>
            {restaurantData.length> 0 ?(
                restaurantData.map((restaurant, index) => (
                    <RestaurantCard data={restaurant} key={index} />
                ))
            ):(
                <p>No restaurants available</p>
            )}
            </div>
        </div>
    );
};

export default Body