import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const MyArtCraftList = () => {
    const { user } = useContext(AuthContext)
    const [crafts, setCrafts] = useState([])

    useEffect(() => {
        
        getDate()
    }, [user])

    const getDate = async () => {
        const { data } = await axios(`https://art-eight-pi.vercel.app/crafts/${user?.email}`)
        setCrafts(data)
    }

    const handleDelete = async id => {
        try{
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/craft/${id}`)
            console.log(data)
        toast.success('delete successful')
        // refresh ui
        getDate()
        }catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }


    return (
        <div className="grid grid-cols-3">
            {crafts.map(craft => (
                <div key={craft._id} className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    {/* <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
                    </div> */}
                    {/* <a rel="noopener noreferrer" href="#">See All</a> */}
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src='' alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            {/* <span>6 min ago</span> */}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{craft.item_name}</h3>
                        </a>
                        <div className="flex justify-between">
                            <h3>{craft.price}</h3>
                            <h3>{craft.rating}</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3>{craft.customization}</h3>
                            <h3>{craft.stockStatus}</h3>
                        </div>
                        {/* <p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p> */}
                        {/* <Link to={`/craft/${_id}`} className="btn btn-secondary">View Details</Link> */}
                        <div className="flex justify-between">
                        <Link to={`/updateCraft/${craft._id}`} className="btn bg-[#B1BCBA]">Update</Link>
                        <button onClick={ () => handleDelete(craft._id) } className="btn bg-[#B1BCBA]"></button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

export default MyArtCraftList;