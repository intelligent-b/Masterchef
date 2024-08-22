import React from "react";

const RestaurantCard = ({ data }) => {
    const restaurant_name = data?.info?.name;
    const location = data?.info?.locality;
    const cuisines  = data?.info?.cuisines;
    const price  = data?.info?.costForTwo;
    const rating = data?.info?.avgRatingString;
    const distance = data?.info?.sla?.lastMileTravelString;
    const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.cloudinaryImageId}`
   // const { image, restaurant_name, location, cuisines, price, rating, distance } = data;
    return (
        <div className='rc-main'>
            <div className="rc-image">
                <img src={image} alt='restaurant image' className='image1' />
            </div>
            <div className='restaurant-details' >
                <h2>{restaurant_name}</h2>
                <h3>{location}</h3>
                <h4>{cuisines?.join(", ")}</h4>
                <h5>Rs {price}</h5>
                <h5>rating {rating}</h5>
                <h5>distance {distance}</h5>
            </div>
        </div>
    );
};

export default RestaurantCard