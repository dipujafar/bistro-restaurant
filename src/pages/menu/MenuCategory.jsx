import { Link } from "react-router-dom";
import CoverBanner from "../../shared/CoverBanner";
import MenuItems from "../../shared/menuItems";
import PropTypes from 'prop-types';


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="mt-10">
            {img && <CoverBanner img={img} title={title}></CoverBanner>}
             <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
               items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <Link to={`/order/${title}`}>
            <button className="btn  btn-outline border-0 border-b-4 mt-4">Order your Favorite Food</button>
            </Link>
            </div>
        </div>
    );
};
MenuCategory.propTypes = {
    items : PropTypes.array,
    img: PropTypes.img,
    title: PropTypes.string,
  };

export default MenuCategory;