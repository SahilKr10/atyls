import { FC } from 'react';
import moment from "moment";

interface IPostProps {
  post: IPost,
  onPostClick: () => void;
}

export interface IPostUser {
  name: string,
  profileImage: string
}

export interface IPostData {
  postBody: string,
  postEmoji: string,
  postStatus?: string
}

export interface IPost {
  id: number,
  user : IPostUser,
  timestamp: number,
  post: IPostData,
  commentCount: number
}

const Post: FC<IPostProps> = (props: IPostProps ) => {
  const { post, onPostClick } = props;
 return (
   <button onClick={onPostClick} className="p-4 bg-greeyish rounded-lg shadow-lg">
     <div className={"flex justify-between items-center"}>
       <div className="flex items-center mb-2">
         <img
           src={post?.user?.profileImage}
           alt="Theresa Webb"
           className="w-10 h-10 mr-3 rounded-full"
         />
         <div>
           <h3 className="text-lg font-bold">{post?.user?.name}</h3>
           <p className="text-gray-400 text-sm">
             {moment(post?.timestamp).fromNow()}
             {post.post?.postStatus && ` • ${post.post.postStatus}`}
           </p>
         </div>
       </div>
       <span className="material-symbols-rounded text-gray-300 font-lg">more_horiz</span>
     </div>
     <div
       className="flex justify-start items-center gap-4 mt-4 p-4 bg-blackish rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500">
       <div className={"h-12 min-w-12 flex justify-center items-center rounded-3xl bg-greeyish"}>
         {post.post.postEmoji}
       </div>
       <p className="mb-2 text-gray-500">{post.post.postBody}</p>
     </div>
     <p className="mt-3 text-sm font-semibold text-gray-500 flex gap-2 items-center">
       <span className="material-symbols-rounded text-gray-300 text-lg">chat_bubble</span>
       {`${post.commentCount} comments`}
     </p>
   </button>
 );
};

export default Post;
