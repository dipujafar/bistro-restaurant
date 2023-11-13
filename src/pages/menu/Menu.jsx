import { Helmet } from "react-helmet-async";
import CoverBanner from "../../shared/CoverBanner";
import img from '../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <CoverBanner img={img} title={"Our Menu"}></CoverBanner>
        </div>
    );
};

export default Menu;