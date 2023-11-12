import { useEffect, useState } from "react";
import SectionTitle from "../title/SectionTitle";
import MenuItems from "../../shared/menuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data=> {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <section className="mb-10">
            <SectionTitle heading='form our menu' subHeading='popular items'>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn mx-auto btn-info btn-outline border-0 border-y-4 mt-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;