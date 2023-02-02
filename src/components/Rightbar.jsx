import { Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Image1 from '../assets/images/avatar/1.jpg';
import Image2 from '../assets/images/avatar/2.jpg';
import Image3 from '../assets/images/avatar/3.jpg';
import Image4 from '../assets/images/avatar/4.jpg';


const Rightbar = () => {
   return (
      <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <Box position="fixed">
            <Typography variant="h6" fontWeight={100}>
               Online Friends
            </Typography>

            <AvatarGroup max={4}>
               <Avatar alt="Remy Sharp" src={Image1} />
               <Avatar alt="Travis Howard" src={Image2} />
               <Avatar alt="Cindy Baker" src={Image3} />
               <Avatar alt="Agnes Walker" src={Image4} />
               <Avatar alt="Trevor Henderson" src={Image1} />
               />
            </AvatarGroup>

            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
               Latest Photos
            </Typography>

            {/* IMAGES GRID */}
            <ImageList cols={3} rowHeight={100} gap={5}>
               <ImageListItem>
                  <img
                     src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://material-ui.com/static/images/image-list/burgers.jpg"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://material-ui.com/static/images/image-list/camera.jpg"
                     alt=""
                  />
               </ImageListItem>
            </ImageList>

            {/* LATEST CONVERSATIONS */}
            <Typography variant="h6" fontWeight={100} mt={2} >
               Latest Conversations
            </Typography>

            {/* LIST */}
            <List
               sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
               }}>
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={Image1} />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Brunch this weekend?"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary">
                              Ali Connors
                           </Typography>
                           {
                              " — I'll be in your neighborhood doing errands this…"
                           }
                        </React.Fragment>
                     }
                  />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar alt="Travis Howard" src={Image2} />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Summer BBQ"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary">
                              to Scott, Alex, Jennifer
                           </Typography>
                           {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                     }
                  />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar alt="Cindy Baker" src={Image3} />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Oui Oui"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary">
                              Sandra Adams
                           </Typography>
                           {
                              ' — Do you have Paris recommendations? Have you ever…'
                           }
                        </React.Fragment>
                     }
                  />
               </ListItem>
            </List>
         </Box>
      </Box>
   );
};

export default Rightbar;
