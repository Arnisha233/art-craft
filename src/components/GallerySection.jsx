
import img1 from '../assets/Images/gallery1.jpg'
import img2 from '../assets/Images/gallery2.jpg'
import img3 from '../assets/Images/gallery3.webp'
import img4 from '../assets/Images/gallery4.jpg'
import img5 from '../assets/Images/gallery5.jpg'
import img6 from '../assets/Images/galley6.jpg'
import img7 from '../assets/Images/gallery7.jpg'
import img8 from '../assets/Images/gallery8.jpg'
import img9 from '../assets/Images/gallery9.jpg'
import img10 from '../assets/Images/gallery10.jpg'


const GallerySection = () => {
    return (
        <div>
			<h1 className="text-3xl text-center mt-12">Our Collection</h1>
            <section className="py-6 bg-[#B1BCBA] dark:text-gray-900 mt-12 container mx-auto">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 mt-6">
		<img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img6} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img7} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img8} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img9} />
		<img src={img10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
    );
};

export default GallerySection;