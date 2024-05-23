// import axios from "axios";
// import { useContext } from "react";
// import toast from "react-hot-toast";
// import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";


// const UpdateCraft = () => {
//     // const navigate = useNavigate()
//     const  card  = useLoaderData()
//     const { user } = useContext(AuthContext)

   
//     const handleFormSubmit = async e => {
//         e.preventDefault()
//         const form = e.target
//         const image = form.image.value
//         const item_name = form.item_name.value
//         const subcategory_Name = form.subcategory_Name.value
//         const short_description = form.short_description.value
//         const price = form.price.value
//         const rating = form.rating.value
//         const customization = form.customization.value
//         const processing_time = form.processing_time.value
//         const stockStatus = form.stockStatus.value
//         const email = user.email;
//         const userName = user?.displayName || 'user name not found';

        
//         const craftData = {
//             image,
//             item_name,
//             subcategory_Name,
//             short_description,
//             price,
//             rating,
//             customization,
//             processing_time,
//             stockStatus,
//             buyer: {
//                 email,
//             userName
//             }
        
//         }


//         try{
//             const { data } = await axios.put(
//                 `${import.meta.env.VITE_API_URL}/card/${_id}`, craftData)
//             console.log(data)
//         toast.success('craft data update successfully')
//         // navigate
//         }catch (err) {
//             console.log(err)
//         }

        
//         // console.log(craftData)
//     }


//     return (
//         <div>
//             <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
// 	<form onSubmit={handleFormSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ">
		
// 			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto text-center w-[50%]">
// 				<div className="col-span-full sm:col-span-3">
// 					<label htmlFor="username" className="mr-0 mb-[20px] text-sm">image</label>
// 					<input id="image" type="text" name='image' placeholder="Image URL" className="w-full h-[30px] rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-5" />
// 				</div>
// 				<div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">Item Name</label>
// 					<input id="website" type="text" name='item_name' placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
// 				</div>
// 				<div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">Subcategory Name</label>
// 					<input id="website" type="text" name='subcategory_Name' placeholder="Subcategory Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
// 				</div>
//                 <div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">price</label>
// 					<input id="price" type="text" name='price
// ' placeholder="$" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 p-2" />
// 				</div>
//                 <div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">rating</label>
// 					<input id="rating" type="number" name='rating' placeholder="rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
// 				</div>
//                 <div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">customization</label>
// 					<input id="website" type="text" name='customization' placeholder="Type 'yes' or 'no'" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                    
                    

// 				</div>
//                 <div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">processing Time</label>
// 					<input id="website" type="text" name='processing_time' placeholder="processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
// 				</div>
//                 <div className="col-span-full sm:col-span-3">
// 					<label htmlFor="website" className="text-sm">stockStatus</label>
// 					<input id="website" type="text" name='stockStatus' placeholder="stockStatus" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
// 				</div>
                
                
// 			</div>
// 		{/* </fieldset> */}

//         <div className='flex flex-col gap-2 mt-4 w-full text-center'>
//             <label className='text-gray-700 ' htmlFor='description'>
//               Description
//             </label>
//             <textarea
//               className='block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring w-[50%] mx-auto'
//               name='short_description'
//               id='short_description'
//             ></textarea>
//           </div>
        
//         {/* <input type="submit" value="Update" className='btn btn-block w-[50%] text-center mx-auto bg-[#1F686A] text-[#fff]' /> */}
//         <Link to={`/my-art-craft-list/${craft._id}`} className='btn btn-block w-[50%] text-center mx-auto bg-[#1F686A] text-[#fff]'>Update</Link>
// 	</form>
// </section>
//         </div>
//     );
// };

// export default UpdateCraft;