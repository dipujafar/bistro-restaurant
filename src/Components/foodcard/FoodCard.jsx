import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useCart from '../../hooks/useCart';
const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure  = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddtocart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image
      };

      axiosSecure.post("/carts", cartItem)
      .then(res=>{
        if(res.data?.insertedId){
          toast.success("Successfully add to cart");
          refetch();
        }
      })

    }
    else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: location?.pathname })
        }
      });
    }
  }
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
          <button onClick={handleAddtocart} className="btn  btn-outline  border-0 border-b-4 mt-4 bg-slate-200">Add to card</button>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object,
};


export default FoodCard;
