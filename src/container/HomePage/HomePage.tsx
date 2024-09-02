import {FC, useMemo, useState} from 'react';
import {PageState} from "./helper";
import Login from "../Login/Login";
import PostsList from "../PostsList/PostsList";

interface IHomePageProps {
}



const HomePage: FC<IHomePageProps> = (props: IHomePageProps ) => {

	const [currentPage, setCurrentPage] = useState<PageState>(PageState.LOGIN)

	const getComponent = (pageState: PageState) => {
		switch (pageState) {
			case PageState.LOGIN : return Login;
			case PageState.POSTS_LIST : return PostsList;
		}
	}

	const getComponentProps = (pageState: PageState) => {
		switch (pageState) {
			case PageState.LOGIN : return {
				onLogin: () => {
					setCurrentPage(PageState.POSTS_LIST)
				}
			}
			case PageState.POSTS_LIST : return PostsList;
		}
	}

	const Component: any = useMemo(() => getComponent(currentPage), [currentPage])

 return (
	 <div className="flex items-center justify-center min-h-screen bg-blackish">
		 <Component {...getComponentProps(currentPage)}/>
	 </div>
)
	;
};

export default HomePage;
