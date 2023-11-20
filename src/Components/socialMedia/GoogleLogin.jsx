import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/logoImg/googleLogo1.png'
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const GoogleLogin = () => {
    const { googleSingIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSing = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user);
                const uesrInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                };

                axiosPublic.post('/users', uesrInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/")
                    });
            })
    };
    return (
        <div>
            <p onClick={handleGoogleSing}>
                <img src={googleLogo} alt="googleLogo" className="w-8" />
            </p>
        </div>
    );
};

export default GoogleLogin;