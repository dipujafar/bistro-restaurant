import { Helmet } from "react-helmet-async";
import Banner from "../../Components/HomePage/Banner";
import Category from "../../Components/HomePage/Category";
import Featured from "../../Components/HomePage/Featured";
import PopularMenu from "../../Components/HomePage/PopularMenu";
import Testimonial from "../../Components/HomePage/Testimonial";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Bristo | Home</title>
        </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;