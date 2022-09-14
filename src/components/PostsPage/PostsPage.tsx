import { useState } from "react";
import { CreateForm } from "../CreateForm";
import { PostsList } from "../PostsList";
import { Grid, Typography } from '@mui/material';

export interface Ipost {
   name: string,
   avatar: string,
   message: string,
   id: string
}

export const PostsPage = () => {
   const [posts, setPosts] = useState<any>([])

   const createPost = (newPost: Ipost[]) => {
      setPosts([newPost, ...posts])
   }
   
   console.log(posts.slice(0, 5)) 

   return (
      <>
         <Grid container spacing={2}>
            <Grid item xs={8}>
               <CreateForm create={createPost} />
            </Grid>
            <Grid item xs={4}>
               <PostsList posts={posts.slice(0, 5)} />
               <Typography sx={{ mt: '1rem', textAlign: 'right' }}>
                  Your last 5 posts
               </Typography>
            </Grid>
         </Grid>
         <Grid container>
            <Grid item xs={8}>
               <Typography sx={{ mt: '1rem', textAlign: 'right'}}>
                  You have {posts.length} posts
               </Typography>
               <PostsList posts={posts} />
               <Typography sx={{ mt: '1rem' }}>
                  Your all posts
               </Typography>
            </Grid>
         </Grid>
      </>

   )
}