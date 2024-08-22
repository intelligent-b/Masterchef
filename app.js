// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./app.css";
// import { data } from './data';
// import React, { useState } from 'react';

// // Your component code here



// // Functional component
// let restaurants = data;  // assuming that we are receiving this data from  the api

// const Header = () => {
//     const [searchValue , setSearchValue] = useState(null);
//     console.log("searchValue : ", searchValue);
    
    
    
//     return(
//         <div className='container'>
        
//             <img src='https://i.pinimg.com/736x/a8/c7/73/a8c7733df3d7aa14c21c708ad96197a8.jpg' alt='resImage' className='image'/>
        
           
//             <input className='input'
//                     type='search' 
//                     placeholder='Search for Restaurants, Deals, Offers or Events' 
//                     onInput={ event => {
//                                             // console.log(event.target.value)
//                                             setSearchValue(event.target.value);
//                                         } 
//                     }
//                     />
                    
//                     <button className='search'
//                      onClick={handleSearch}
//                     >Search</button>
        
//                 <ul className='ul'>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     </ul>
                    
//                     <button className='button'>Login</button>
//                     <Body/>
//         </div>
        
//     );
// };

// // const RestaurantCard = () => {
// //     return(
// //         <div style={{width : "20%" , height : "40%" , border : "1px solid gray" , borderRadius : "12px" , margin : "1%" }} >
// //             {/* image */}
// //             <div style={{width : "98%" , height : "70%" , padding : "1%" , borderRadius : "10px" , cursor : "pointer" }} >
// //                 <img style={{width : "100%" , height : "100%" , borderRadius : "10px"}} src='https://b.zmtcdn.com/data/pictures/8/20628188/555317a0fbe6ca3096f38e187197d62b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*' alt='restaurant image' />
// //             </div>

// //             {/* details */}
// //             <div className='restaurant-details' style={{height : "30%" , width : "100%" , padding : "3%" , textWrap : "wrap" }} >
// //                 <h2>Babylonia - Global Food & Cocktails</h2>
// //                 <h3>Kormangla</h3>
// //                 <h4>Continental, North Indian, Asian, Italian, Mughlai, Mediterranean, Bar Food, Desserts</h4>
// //                 <h5>Rs 1500</h5>
// //                 <h5>rating 4</h5>
// //                 <h5>distance 900m</h5>
// //             </div>
// //         </div>
// //     )
// // }
// const RestaurantCard = ({ data }) => {
//     // console.log(data);
//     const {image, restaurant_name, location, cuisines, price, rating, distance } = data;
    

//     return (
//         <div style={{ width: "20%", height: "40%", border: "1px solid gray", borderRadius: "12px", margin: "1%" }} >
//             {/* image */}
//             <div style={{ width: "98%", height: "70%", padding: "1%", borderRadius: "10px", cursor: "pointer" }} >
//                 <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={image} alt='restaurant image' />
//             </div>

//             {/* details */}
//             <div className='restaurant-details' style={{ height: "40%", width: "100%", padding: "3%", textWrap: "wrap" }} >
//                 <h2>{restaurant_name}</h2>
//                 <h3>{location}</h3>
//                 <h4>{cuisines.join(", ")}</h4>
//                 <h5>Rs {price} + {data?.discount}</h5>
//                 <h5>rating {rating}</h5>
//                 <h5>distance {distance}</h5>
//             </div>
//         </div>
//     )
// }

// // const Body = () => {
// //     return(
// //         <div style={{width : "100",height:"70%" , overflow : "auto" , border : "1px solid red"}} >
// //             {/* <div>
// //                 <input type='search' placeholder='Search here' />
// //             </div> */}
// //             <div style={{margin : "1% 4%" , display : "flex" , flexWrap : "wrap" }} >
// //                 <RestaurantCard/>
// //                 <RestaurantCard/>

// //                 <RestaurantCard/>

// //                 <RestaurantCard/>

// //                 <RestaurantCard/>

// //                 <RestaurantCard/>

// //                 <RestaurantCard/>


// //             </div>
// //             {/* Cards */}

// //         </div>
// //     )
// // }

// const Body = () => {

//     let [count, setCount] = useState(0);
//     const [restaurantData , setRestaurantData] = useState(restaurants);
//     const filterData  = (searchText , restaurants) => {
//         return restaurants.filter( restaurant =>  restaurant?.restaurant_name.includes(searchText) );
//     }
//     const handleSearch = () => {
//         const filteredRestaurant = filterData(searchValue, data);
//         setRestaurantData(filteredRestaurant);
//     };

//     return (
//         <div style={{ width: "100", height: "70%", overflow: "auto", border: "1px solid red" }} >
//             {/* <center style={{ marginTop: "1%" }} >
//                 <input 
//                     style={{ width: "30%", padding: "1%", borderRadius: "20px", fontSize: "20px" , background : "black" , color : "whitesmoke"}} 
//                     type='search' 
//                     placeholder='Search here' 
//                     onInput={ event => {
//                                             // console.log(event.target.value)
//                                             setSearchValue(event.target.value);
//                                         } 
//                             }
//                     /><br/>
//                     <button 
//                             style={{padding : "0.8%" , borderRadius : "10px" , background : "black" , color : "whitesmoke" , marginTop : "0.3%" , cursor : "pointer"}} 
//                             onClick={ () =>  {
//                                     const filteredRestaurant = filterData(searchValue , restaurants)
//                                     console.log("filter Data : ",filteredRestaurant);
//                                     setRestaurantData(filteredRestaurant);
//                                 } 
//                             }
//                             >Search Item</button>
//             </center> */}
            
//             <div style={{ margin: "1% 4%", display: "flex", flexWrap: "wrap" }} >
//                 {/* <RestaurantCard data={restaurants[0]} />
//                 <RestaurantCard data={restaurants[1]} />
//                 <RestaurantCard data={restaurants[2]} />
//                 <RestaurantCard data={restaurants[3]} />
//                 <RestaurantCard data={restaurants[4]} />
//                 <RestaurantCard data={restaurants[5]} /> */}
//                 {/* count =  {count}
//                 <button onClick={() => setCount(count++) } >increase</button> */}
//                 {
//                     restaurantData.map((restaurant, index) =>
//                         <RestaurantCard data={restaurant} key={index} />
//                     )
//                 }
//                 <Header/>
//             </div>
//             {/* Cards */}
            
//         </div>
//     )
// }


// const App = () => {
//     return (
//         <>
//         {/* 
//             Header
//                 -Logo
//                 -Navbar
//                 -Login and signup
            
//             body
//                 - carousal
//                 - search bar
//                 - Cards
//                     -Image
//                     -Name of the restaurant
//                     -Location
//                     -price
//                     -rating
//                     -distane

//             footer
//                 -Social media icons
//                 -About su
//                 -contact us 
//                 - Terms and conditions 
//         */}
//         <div id='main'>
//             <Header/>
//             <Body/>
            

//         </div>

//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(<App />)



//2nd type of code for search text

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./app.css";
import { data } from './data';
import Body from './pages/Body/Body';
import Header from './pages/Header/Header';
 import Login from './pages/swiggy_login/swiggy_login'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Signup from './pages/swiggy_signup/sign_up';
  

// Functional component

const App = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([restaurantData]);
    const [searchValue, setSearchValue] = useState('');

    const filterData = (searchText, data) => {
        console.log(data);
        return data.filter(restaurant =>
            restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const handleSearch = () => {
        const filtered = filterData(searchValue, restaurantData);
        console.log(filtered);
        // setRestaurantData(filteredRestaurant);
        setFilteredRestaurant(filtered)
    };

    return (
        <>
        <div id='main'>
                <Header 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    handleSearch={handleSearch}
                    setRestaurantData={setRestaurantData}  // Ensure this is correctly passed
                    setFilteredRestaurant={setFilteredRestaurant}
                />
                <Body 
                    
                    restaurantData={filteredRestaurant}  // Pass filtered data to Body
                    
                />
            </div>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path : "aboutus",
        element : <h1>About Us</h1>
    },
    {
        path : "contactus",
        element : <h1>Contact Us</h1>
    },
    {
        path : "login",
        element : <><Login/></>
    },
    {
        path : "signin",
        element : <><Signup/></>
    },
  
]);

// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(<React.StrictMode><App /></React.StrictMode>);


ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
    
  );