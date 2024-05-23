import { Link } from "react-router-dom";


const Cards = ({card}) => {
	const { _id, title, price, rating, image } = card || {}
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 container mx-auto">
	<div className="flex justify-between pb-4 border-bottom">
		{/* <div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div> */}
		{/* <a rel="noopener noreferrer" href="#">See All</a> */}
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				{/* <span>6 min ago</span> */}
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-[#111111]">{title}</h3>
			</a>
			<div className="flex justify-between">
				<h3 className="text-[#111111]">{price}</h3>
				<h3 className="text-[#111111]">{rating}</h3>
			</div>
			{/* <p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p> */}
			<Link to={`/craft/${_id}`} className="btn bg-[#B1BCBA] text-[#111111]">View Details</Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default Cards;