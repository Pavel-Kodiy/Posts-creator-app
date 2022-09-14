import { AppBar, Toolbar, Typography } from '@mui/material';


export const Header: React.FC = () => {
   return (
      <AppBar position="static" sx={{alignItems: 'center'}}>
         <Toolbar>
            <Typography
            variant='h6'
            >
               Your posts app
            </Typography>
         </Toolbar>
      </AppBar>
   )
}