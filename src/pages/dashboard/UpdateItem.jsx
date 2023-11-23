import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../Components/title/SectionTitle";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const UpdateItem = () => {
    const {id} = useParams();
    const [item,setItem] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5000/menu/${id}`)
        .then(res=>setItem(res.data))
    },[id]);
    console.log(item)
    return (
        <div>
            <SectionTitle heading="Update Item"></SectionTitle>
        </div>
    );
};

export default UpdateItem;