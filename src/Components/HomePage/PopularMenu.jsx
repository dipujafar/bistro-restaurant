import SectionTitle from "../title/SectionTitle";
import MenuItems from "../../shared/menuItems";
import useMenu from "../../hooks/useMenu";


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
            <button className="btn mx-auto btn-info btn-outline border-0 border-y-4 mt-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;