import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    const handleMakeAdmin = user =>{
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be meke admin ${user.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "confirm"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Successfully",
                                text: `${user.name} is an admin now`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <h1 className="text-3xl">Total User : {users.length} </h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, inx) => <tr key={user._id}>
                                    <th>{inx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === "admin"? "Admin": <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-400"><FaUsers className="text-white text-2xl"></FaUsers></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn bg-red-400"><FaTrashAlt className="text-white  text-xl"></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;