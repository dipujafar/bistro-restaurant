import googleLogo from '../../assets/logoImg/googleLogo1.png'
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
    const {googleSingIn} = useAuth();
    const handleGoogleSing = () => {
       googleSingIn()
       .then(result=>{
        console.log(result.user);
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