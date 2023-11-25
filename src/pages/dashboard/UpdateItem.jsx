import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/title/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const {name, categoty, price, recipe,_id} = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  
    const onSubmit = async (data) => {
        console.log(data);
    
        const imageFile = { image: data.image[0] };
    
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
    
       
          const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            image: res.data?.data?.display_url,
            recipe: data.recipe,
          };
          const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
          console.log(menuRes.data);
          if (menuRes.data.modifiedCount > 0) {   
            toast.success(`${data.name} menu is Updated`);
          }
        
        console.log(res.data);
      };
    
    return (
        <div>
            <SectionTitle heading="Update Item"></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input />
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name")}
              required
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          {/* category and price */}
          <div className="flex gap-3">
            <div className="form-control w-full my-3">
              <label className="label">
                <span className="label-text font-bold">Category*</span>
              </label>
              <select
               
                defaultValue={categoty}
                {...register("category")}
                required
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
                <option value="offer">offer</option>
              </select>
            </div>
            <div className="form-control w-full my-3">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                {...register("price")}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control  w-full my-3">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control  w-full my-3">
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn bg-gradient-to-r from-[#B58130] to-[#835D23]">
            Update Menu Item
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;