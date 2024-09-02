import { FC } from 'react';

interface ICreatePostProps {
  onPostCardClick: () => void;
}

const CreatePost: FC<ICreatePostProps> = (props: ICreatePostProps ) => {
  const {onPostCardClick} = props;
 return (
   <button onClick={onPostCardClick} className="w-full px-5 py-6 mb-6 bg-greeyish rounded-lg shadow-lg">
    <h2 className="text-xl">Create post</h2>
    <div className="flex justify-start items-center gap-4 mt-4 p-4 bg-blackish rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      <div className={"h-12 min-w-12 flex justify-center items-center rounded-3xl bg-greeyish"}>
       <span className="material-symbols-rounded">sms</span>
      </div>
      <input
        type="text"
        placeholder="How are you feeling today?"
       className="w-full text-gray-900 bg-blackish rounded-md focus:outline-none focus:transparent"
     />
    </div>
    <div className="flex justify-end mt-4">
     <button className="px-4 py-2 text-white bg-primary-cta rounded-md hover:bg-blue-700">
      Post
     </button>
    </div>
   </button>
 );
};

export default CreatePost;
