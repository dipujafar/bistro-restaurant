import { Link } from 'react-router-dom';
import errorPic from '../assets/error/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Link to='/'>
            <button className='btn btn-outline mt-2 btn-primary'>  Go Home</button>
            </Link>
            <img src={errorPic} alt="" />
           
        </div>
    );
};

export default ErrorPage;