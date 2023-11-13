import { Helmet } from "react-helmet-async";
import CoverBanner from "../../shared/CoverBanner";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import SectionTitle from "../../Components/title/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./Menucategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* main cover */}
            <CoverBanner img={menuImg} title={"Our Menu"}></CoverBanner>
            {/* offered menus */}
            <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
            <MenuCategory items={offered} title="offer"></MenuCategory>
            {/* dessert menus */}
            <MenuCategory items={dessert} title={"dessert"} img={dessertImg} ></MenuCategory>
            {/* pizza menus */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} ></MenuCategory>
            {/* salad menus */}
            <MenuCategory items={salad} title={"salad"} img={saladImg} ></MenuCategory>
            {/* soup menus */}
            <MenuCategory items={soup} title={"soup"} img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;