
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import CraftItems from "../components/CraftItems";
import GallerySection from "../components/GallerySection";
import Testimonial from "../components/Testimonial"


const Home = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div>
            <Carousel />
            <CraftItems cards={cards} />
            <GallerySection />
            <Testimonial />
        </div>
    );
};

export default Home;