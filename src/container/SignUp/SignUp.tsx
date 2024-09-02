import {FC, useState} from 'react';

interface ISignUpProps {
	onSignUpSubmit: () => void;
	onLogin: () => void;
	onClose: () => void;
}

const SignUp: FC<ISignUpProps> = (props: ISignUpProps ) => {

	const {onSignUpSubmit, onClose, onLogin} = props;

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

 return (
	 <div className="relative w-full max-w-md p-8 space-y-6 bg-greeyish rounded-lg shadow-lg border-2 border-border-dark">
		 <div className="text-center">
			 {/*text-white-600 - class not working for some reason, using opacity directly due to time constraints*/}
			 <h2 className={"text-white opacity-60 text-sm"}>SIGN UP</h2>
			 <h2 className="text-xl font-bold text-white">Create an account to continue</h2>
		 </div>
		 <form className="mt-8 space-y-6">
			 <div className="rounded-md shadow-sm">
				 <div>
					 <label htmlFor="email" className="text-white opacity-60 text-sm">Email</label>
					 <input
						 id="email"
						 name="email"
						 type="email"
						 autoComplete="email"
						 required
						 className="block w-full px-3 py-2 mt-1 text-white opacity-50 placeholder-gray-500 border-2 border-border-light rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-transparent mb-4"
						 placeholder="Enter your email"
					 />
				 </div>
				 <div>
					 <label htmlFor="email" className="text-white opacity-60 text-sm">Username</label>
					 <input
						 id="username"
						 name="username"
						 type="text"
						 required
						 className="block w-full px-3 py-2 mt-1 text-white opacity-50 placeholder-gray-500 border-2 border-border-light rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-transparent mb-4"
						 placeholder="Choose a preferred username"
					 />
				 </div>
				 <div className={"relative"}>
					 <label htmlFor="password" className="text-white opacity-60 text-sm">Password</label>
					 <input
						 id="password"
						 name="password"
						 type={showPassword ? 'text' : 'password'}
						 autoComplete="current-password"
						 required
						 className="block w-full px-3 py-2 mt-1 text-white opacity-50 placeholder-gray-500 border-2 border-border-light rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-transparent"
						 placeholder="Choose a strong password"
					 />
					 <div
						 className="absolute top-6 inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-white opacity-50"
						 onClick={togglePasswordVisibility}
					 >
						 {showPassword ? (<span className="material-symbols-outlined">visibility_off</span>) : (
							 <span className="material-symbols-outlined">visibility</span>
						 )}
					 </div>
				 </div>
			 </div>

			 <div>
				 <button
					 onClick={onSignUpSubmit}
					 type="submit"
					 className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-cta border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				 >
					 Continue
				 </button>
			 </div>
		 </form>

		 <div className="m-0 text-white" style={{marginTop: "0.5rem"}}>
			 <span className={"opacity-50"}>Already have an account?</span>
			 <button onClick={() => onLogin && onLogin()} className={"opacity-60 ml-1"}>Login →</button>
		 </div>

		 {onClose && <button onClick={onClose} style={{marginTop: 0}} className={"absolute right-4 top-4 flex justify-center items-center h-8 min-w-8 rounded-full bg-blackish"}>
			 <span className="material-symbols-rounded text-white">close</span>
		 </button>}
	 </div>
 );
};

export default SignUp;
