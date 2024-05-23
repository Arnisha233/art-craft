
// import { useEffect, useState } from "react";

import Cards from "./Cards";

// import Cards from "./Cards";


// eslint-disable-next-line react/prop-types
const CraftItems = ({ cards }) => {
    // const [CraftItems, setCraftItems] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:9000/cards')
    //     .then(res => res.json())
    //     .then(data => setCraftItems(data));
    // }, [])

    return (
        <div>
           <div>
           <h1 className='text-center text-3xl'>Crafting Your Way to Beauty and Utility</h1>
        <p className='text-center w-1/3 mx-auto mt-4'>Craft Items" offers a delightful array of handmade creations, from intricate jewelry to cozy knitted goods and everything in between. Unleash your creativity and explore a world of unique</p>
           </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {cards.map(card =><Cards key={card._id} card={card} />)}
          </div>
        </div>
    );
};

export default CraftItems;