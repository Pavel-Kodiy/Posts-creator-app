import { Grid, Typography } from '@mui/material';

export const Footer: React.FC = () => {
   return (
      <Grid container xs={12} sx={{
         marginTop: 'calc(10% + 60px)',
         position: 'fixed',
         bottom: 0,
         alignItems: 'center',
         backgroundColor: 'blueviolet'
      }}>
         <Grid item xs={12}>
            <Typography
               sx={{ textAlign: 'center', m: '1rem', color: 'white' }}
            >
               Created by{' '}
               <a style={{ color: 'white'}} href='mailto:pavel.kodij13@gmail.com'>pavel.kodij13@gmail.com</a>
            </Typography>
         </Grid>
      </Grid>
   );
};