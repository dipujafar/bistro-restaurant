import PropTypes from 'prop-types';
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
  <figure>
    <img src={image} alt="Shoes" className="rounded-xl" />
    <p className="absolute bg-slate-700 text-white py-1 rounded px-2 top-4 right-8">${price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn  btn-outline  border-0 border-b-4 mt-4 bg-slate-200">Add to card</button>
    </div>
  </div>
</div>
  );
};
FoodCard.propTypes = {
    item: PropTypes.object,
  };


export default FoodCard;