import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button, TextField} from '@mui/material';
import { Ipost } from '../PostsPage/PostsPage';

interface CreateFormProps {
   create: (a: [Ipost]) => void
}

export const CreateForm: React.FC<CreateFormProps> = (props) => {
   const { create } = props

   const [post, setPost] = useState<any>({
      name: '',
      avatar: '',
      message: ''
   });

   const addNewPost = (e: any) => {
      e.preventDefault();

      const newPost = {
         ...post, id: uuidv4()
      }
      create(newPost)
      setPost({
         name: '',
         avatar: '',
         message: ''
      })
   }

   return (
      <Container sx={{ mt: '1rem'}}>
         <TextField
            sx={{ m: 1 }}
            margin="normal"
            fullWidth
            id="standard-basic"
            label="Type your name"
            variant="standard"
            type="text"
            value={post.name}
            onChange={e => setPost({ ...post, name: e.target.value })}
         />
         <TextField
            margin="normal"
            fullWidth
            id="standard-basic"
            label="Type your avatar url"
            variant="standard"
            type="text"
            value={post.avatar}
            onChange={e => setPost({ ...post, avatar: e.target.value })}
         />
         <TextField
            margin="normal"
            fullWidth
            label="Type your message"
            id="fullWidth"
            value={post.message}
            onChange={e => setPost({ ...post, message: e.target.value })}
         />
         <Button sx={{mt: '1rem', width: '50%'}}
            variant="contained"
            onClick={addNewPost}
         >
            Add post
         </Button>
      </Container>
   )
}
