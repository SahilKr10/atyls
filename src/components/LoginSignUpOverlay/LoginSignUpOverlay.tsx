import {FC, useState} from 'react';
import Login from "../../container/Login/Login";
import SignUp from "../../container/SignUp/SignUp";

interface ILoginLogoutOverlayProps {
 onClose: () => void;
}

enum PageFlow {
 LOGIN = "LOGIN",
 SIGNUP = "SIGNUP"
}

const LoginSignUpOverlay: FC<ILoginLogoutOverlayProps> = (props: ILoginLogoutOverlayProps ) => {
 const {onClose} = props;
 const [currentFlow, setCurrentFlow] = useState<PageFlow>(PageFlow.SIGNUP)
 const [onCloseTriggered, setCloseTriggered] = useState<boolean>(false);

 const onLoginSubmit = () => {
  onClose();
 }

 const onSignUpSubmit = () => {
  onClose();
 }

 const onLogin = () => {
  setCurrentFlow(PageFlow.LOGIN);
 }

 const onSignUp = () => {
  setCurrentFlow(PageFlow.SIGNUP);
 }

 const handleOverlayCloseClose = () => {
  setCloseTriggered(true);
  setTimeout(onClose, 200)
 }

 const getComponent = () => {
  switch (currentFlow) {
   case PageFlow.LOGIN: return <Login onLogin={onLoginSubmit} onClose={handleOverlayCloseClose} onSignUp={onSignUp} />
   case PageFlow.SIGNUP: return <SignUp onSignUpSubmit={onSignUpSubmit} onLogin={onLogin} onClose={handleOverlayCloseClose} />
  }
 }
 return (
  <div className={`fixed top-0 left-0 ${onCloseTriggered ? "animate-fadeOut" : "animate-fadeIn"} bg-[#00000033] backdrop-blur-[2px] h-full w-full flex justify-center items-center`}>
   {getComponent()}
  </div>
 );
};

export default LoginSignUpOverlay;
