import { Post } from "../Post/Post";
import { Grid } from '@mui/material';
import { Ipost } from "../PostsPage/PostsPage";

interface PostListProps {
   posts: [Ipost]
}

export const PostsList: React.FC<PostListProps> = (props) => {
   const {
      posts
   } = props;

   return (
      <Grid container sx={{ mt: '1rem'}}>
         {posts.map((post: any) =>
            <Post
               name={post.name}
               avatar={post.avatar}
               message={post.message}
               key={post.id}
            />
         )}
      </Grid>
   )
}