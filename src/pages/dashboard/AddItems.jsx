import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/title/SectionTitle";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <SectionTitle heading='Add an item' subHeading="What's New"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input />
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            {...register("name")}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full" />
                    </div>
                    {/* category and price */}
                    <div className="flex gap-3">
                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select {...register("category")}
                                className="select select-bordered w-full ">
                                <option disabled selected>Select a Category</option>
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
                                {...register("price")}
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea  {...register("name")} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;