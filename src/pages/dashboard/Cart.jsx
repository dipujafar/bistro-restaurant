import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((acc, current) => acc + current.price, 0)
    return (
        <div>
            <div className="flex justify-evenly mb-4">
                <h1 className="text-3xl"> Items: {cart.length}</h1>
                <h1 className="text-3xl"> TotalPrice: ${totalPrice}</h1>
                <button className="btn btn-outline btn-sm">pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, inx)=> <tr key={item._id}>
                            <th>
                                {inx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="food_image" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <th>
                                <button className="btn btn-ghost"><FaTrashAlt className="text-red-400"></FaTrashAlt></button>
                            </th>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;