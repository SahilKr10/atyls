import {FC, useState} from 'react';
import CreatePost from "../CreatePost/CreatePost";
import Post, {IPost} from "../../components/Post/Post";
import LoginSignUpOverlay from "../../components/LoginSignUpOverlay/LoginSignUpOverlay";

interface IPostsListProps {
}

// dummy post response data
const posts: IPost[] = [
 {
  id: 1,
  user : {
   name: "Theresa Webb",
   profileImage: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  timestamp: 1725266054768,
  post: {
   postBody: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
   postEmoji: "👋"
  },
  commentCount: 24,
 },
 {
  id: 2,
  user : {
   name: "Marvin McKinney",
   profileImage: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  timestamp: 1725266054568,
  post: {
   postBody: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
   postEmoji: "😞",
   postStatus: "Edited"
  },
  commentCount: 46,
 },
 {
  id: 3,
  user : {
   name: "John Doe",
   profileImage: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  timestamp: 1725266054768,
  post: {
   postBody: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
   postEmoji: "🤭"
  },
  commentCount: 110
 },
 {
  id: 4,
  user : {
   name: "Maria Jonson",
   profileImage: "https://randomuser.me/api/portraits/women/85.jpg"
  },
  timestamp: 1725267054568,
  post: {
   postBody: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
   postEmoji: "👻"
  },
  commentCount: 2
 },
]

const PostsList: FC<IPostsListProps> = (props: IPostsListProps ) => {

 const [showSignUpOverlay, setSignUpOverlayDisplay] = useState<boolean>(false);
 return (
   <div className="min-h-screen text-white">
    <div className="max-w-2xl px-4 mx-auto">
     <h1 className="pt-8 text-2xl font-semibold">Hello Jane</h1>
     <p className="mt-2 text text-gray-500">
      How are you doing today? Would you like to share something with the community 🤗
     </p>

     <div className="mt-10">
      <CreatePost onPostCardClick={() => setSignUpOverlayDisplay(true)}/>

      {/* Example posts */}
      <div className="space-y-4 pb-6">
       {posts.map((post: IPost) => <Post post={post} key={post.id} onPostClick={() => setSignUpOverlayDisplay(true)}/>)}
      </div>
     </div>
    </div>
    {showSignUpOverlay && <LoginSignUpOverlay onClose={() => setSignUpOverlayDisplay(false)}/>}
   </div>
 );
};

export default PostsList;
