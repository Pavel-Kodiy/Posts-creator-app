/* eslint-disable jsx-a11y/img-redundant-alt */
import { Grid, Card, CardHeader, Avatar } from '@mui/material';

interface PostProps {
   name: string,
   avatar: string,
   message: string
   key: string
}

export const Post: React.FC<PostProps> = (props) => {
   const {
      name,
      avatar,
      message
   } = props

   return (
      <Grid xs={12}>
         <Card sx={{
            mb: '1rem',
            backgroundColor: 'blueviolet',
            color: 'whitesmoke'
         }}>
            <CardHeader
               avatar={
                  <Avatar aria-label="recipe">
                     <img
                        src={avatar}
                        alt={'avatar photo'}
                        loading="lazy"
                     />
                  </Avatar>
               }
               title={name}
               subheader={message}
            >
            </CardHeader>
         </Card>
      </Grid>
   )
}