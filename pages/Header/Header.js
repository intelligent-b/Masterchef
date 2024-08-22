import React, { useEffect, useState } from "react";
import axios from 'axios';
import { api_url, api_url2 } from "../../liveApi";
import { Link, useNavigate } from 'react-router-dom';


const Header = ({ searchValue, setSearchValue, handleSearch,setRestaurantData,setFilteredRestaurant}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();  // Use navigate for navigation

// useEffect(() => {
//         const isAuthenticated = !!localStorage.getItem("authToken"); // Replace with your auth check logic
//         setIsLoggedIn(isAuthenticated);
//     }, []);

  const handleLoginClick = () => {
    navigate('/login');  // Navigate to the login page
  };  
  
    //   useEffect(()=>{
    //     const xhr = new XMLHttpRequest();
    //     //   console.log("status : ", xhr.status);

    //      xhr.onreadystatechange = function() { 
    //         //  console.log("status : ",xhr.readyState);
    //         if(xhr.readyState === 4 && xhr.status === 200){
    //             console.log("Api hit Successfully")
    //             const responsefromtheserver = xhr.responseText;
    //             const JSONdata = JSON.parse(responsefromtheserver);
    //             console.log(JSONdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //         }
    //      };
    //     xhr.open("get","https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6732239&lng=77.2505781&is-seo-homepage-enabled=true&page_type=DESKTOP_");
    //     xhr.send();
    //   },[])

    
     // Function to fetch data from the API
//     const fetchTheDataFromTheApi = async()=>{
//         try{
//          response = await axios(api_url);
//         //  console.log(response);
//          return response;
//     }catch (err) {
//         console.log(err);
//     }
// }

    // Effect to fetch and set initial data
//     useEffect(()=>{
//     //   axios("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6732239&lng=77.2505781&is-seo-homepage-enabled=true&page_type=DESKTOP_").then(data=>console.log(data)).catch(err=>console.log(err));
    
//     fetchTheDataFromTheApi().then(response => {
//         if (response) {
//             const data = response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//             setRestaurantData(data);
//             setFilteredRestaurant(data);
//         }
//     });
// }, [setRestaurantData, setFilteredRestaurant]);

// const handleLogoutClick = () => {
//     localStorage.removeItem("authToken"); // Remove the token or any auth data
//     setIsLoggedIn(false);  // Set the state to not logged in
//     navigate('/');  // Navigate to the homepage after logout
// };

 useEffect(() => {
        // Fetch data from API when component mounts
        const fetchData = async () => {
            try {
                const response = await axios(api_url);
                const data = response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setRestaurantData(data);
                setFilteredRestaurant(data); // Initially, filtered data is the same as all data
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [setRestaurantData, setFilteredRestaurant]);

    

    return (
        <div className='container'>
        <span className='imge'>
            <img src='https://i.pinimg.com/736x/a8/c7/73/a8c7733df3d7aa14c21c708ad96197a8.jpg' alt='resImage' className='image' />
            </span>
            <div className='box'>
            <input
                className='input'
                type='search'
                placeholder='Search for Restaurants, Deals, Offers or Events'
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
            />
            
            <button className='search' onClick={handleSearch}>Search</button>
            </div>
            <div className='list'>
            <ul className='ul'>
                <li>
                <Link to={'/'} className="link">Home</Link>
                </li>
                <li>
                <Link to={'aboutus'} className="link">About Us</Link>
                </li>
                <li>
                <Link to={'contactus'} className="link">Contact Us</Link>
                </li>
            </ul>
    {/* {isLoggedIn ? (
        <button className='button' onClick={handleLogoutClick}>Logout</button>
    ):( */}
        <button className='button' onClick={handleLoginClick}>Login</button>
    {/* )} */}
                  </div>
        </div>
    );
};

export default Header