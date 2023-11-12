import Banner from "../../Components/HomePage/Banner";
import Category from "../../Components/HomePage/Category";
import Featured from "../../Components/HomePage/Featured";
import PopularMenu from "../../Components/HomePage/PopularMenu";
import Testimonial from "../../Components/HomePage/Testimonial";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;