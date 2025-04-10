

import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {
  const [liked, setLiked] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    {
      id: 1,
      title: "Hart Hagerty",
      description: "Vintage Lecia M3 camera",
      color: "Purple",
      country: "United States",
     
      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bid:"12",



      Image: "https://img.daisyui.com/images/profile/demo/2@94.webp"
    },
    {
      id: 2,
      title: "Brice Swyre",
      description: "1965 Gibson SG Standard Electric Guiter",
      color: "Red",
      country: "China",



      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bids:"12",

      Image: "https://img.daisyui.com/images/profile/demo/3@94.webp"
    },
    {
      id: 3,
      title: "Marjy Ferencz",
      description: "Original Apple Machine 128k",
      color: "Crimson",
      country: "Russia",



      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bid:"12",

      Image: "https://img.daisyui.com/images/profile/demo/4@94.webp"
    },
    {
      id: 4,
      title: "Yancy Tear",
      description: "Rolex Submariner 16610",
      color: "Indigo",
      country: "Brazil",


      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bid:"12",




      Image: "https://img.daisyui.com/images/profile/demo/5@94.webp"
    },
    {
      id: 5,
      title: "John Doe",
      description: "First Edition The Great Gateby F ScoottFit",
      color: "Blue",
      country: "USA",




      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bidsCount:"",

      Image: "https://img.daisyui.com/images/profile/demo/6@94.webp"
    },
    {
      id: 6,
      title: "Jane Smith",
      description: "Mid Century Modern Chair",
      color: "Green",
      country: "Canada",


      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bid:"12",


      Image: ""
    },
    {
      id: 7,
      title: "Chris Doe",
      description: "Banks Original scrin print",
      color: "Yellow",
      country: "Mexico",


      currentBidPrice:"$20850",
      timeLeft:"2 hrs Left",
      bidsCount:"",




      Image: "https://img.daisyui.com/images/profile/demo/8@94.webp"
    },
  ];

  const handleLike = (id) => {
    const item = items.find(i => i.id === id);

    // Update liked status and prevent multiple toast calls






    setLiked((prev) => {
      const newState = { ...prev, [id]: !prev[id] };

     
      if (newState[id] !== prev[id] ) {
        toast.success(`Added to favorites: ${item.title}`);

        // if (newState[id]) {
        //   toast.success(`Added to favorites: ${item.title}`);
        // } 
        
        // else {
        //   toast.error(`Removed from favorites: ${item.title}`);
        // }


    }



      return newState;
    });

    setSelectedItems((prev) => {
      const alreadyLiked = prev.find(i => i.id === id);
      if (alreadyLiked) {
        return prev.filter(i => i.id !== id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleCloseCard = (id) => {
    const removedItem = selectedItems.find(item => item.id === id);
    setSelectedItems((prev) => prev.filter(item => item.id !== id));
    setLiked((prev) => ({ ...prev, [id]: false }));
    toast.info(`Favorite removed: ${removedItem.title}`);
  };

  return (
    <div className="flex">
      {/* Left side - table */}
      <div className="overflow-x-auto w-3/4">
        <table className="table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time left</th>
              <th>Bid Now</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.Image} alt="Avatar" />
                      </div>
                    </div>
                    <div>


                    <div className="font-bold">{item.description}</div>

                      {/* <div className="font-bold">{item.title}</div> */}

{/*                       
                      <div className="text-sm opacity-50">{item.country}


                      </div> */}
                    </div>
                  </div>
                </td>
                <td>{item.currentBidPrice}</td>
                <td>{item.timeLeft}</td>
                {/* <td>{item.color}</td> */}
                <td>
                  <button
                    onClick={() => handleLike(item.id)}
                    className="btn btn-ghost btn-xs"
                  >
                    {liked[item.id] ? (
                      <FaHeart color="red" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right side - favorite cards */}


      <div className="w-1/4 p-4 border-l bg-gray-100 space-y-4 overflow-y-auto max-h-screen">


      <h1 className="flex gap-10"> <FaHeart color="red" />Favourits</h1>
        {selectedItems.length === 0 ? (
          <p className="text-gray-500">No favorites selected</p>
        ) : (
          selectedItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <button onClick={() => handleCloseCard(item.id)}>
                  <FaTimes color="red" />
                </button>
              </div>
              <div className="mt-4">
                <img
                  src={item.Image}
                  alt="Avatar"
                  className="mask mask-squircle w-24 h-24 mx-auto"
                />
              </div>
              <p><strong>currentBidPrice:</strong> {item.currentBidPrice}</p>
              <p><strong>Color:</strong> {item.color}</p>
              <p><strong>Country:</strong> {item.country}</p>
             
            </div>



          ))

          
        )}



        {/* <h1>Total Bids Amount:{item.currentBidPrice}</h1> */}
      </div>



      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Menu;
