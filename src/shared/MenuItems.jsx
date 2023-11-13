import PropTypes from 'prop-types';

const MenuItems = ({item}) => {
    const {name, image,price, recipe} = item || {}
    return (
        <div className="flex space-x-2">
          <img src={image} alt="menu_image" className="w-28 rounded-tr-full rounded-b-full" />
          <div>
            <h3 className="uppercase">{name}-----------</h3>
            <p>{recipe}</p>
          </div>
          <p className="text-yellow-500">${price}</p>
        </div>
    );
};
MenuItems.propTypes = {
    item: PropTypes.object,
  };

export default MenuItems;