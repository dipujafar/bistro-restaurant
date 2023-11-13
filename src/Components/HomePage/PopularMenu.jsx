 import SectionTitle from "../title/SectionTitle";
import MenuItems from "../../shared/menuItems";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');
    return (
        <section className="mb-10">
            <SectionTitle heading='form our menu' subHeading='popular items'>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
               popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center">
                <Link to='order/popular'>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View full menu</button>
            </Link>
            </div>
        </section>
    );
};

export default PopularMenu;