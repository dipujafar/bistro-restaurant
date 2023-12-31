import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
    const axiosPublic = useAxiosSecure();
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async () =>{
            const res =await axiosPublic.get('/menu');
            return res.data;
        }
    })

    return [menu, loading, refetch];
};

export default useMenu;