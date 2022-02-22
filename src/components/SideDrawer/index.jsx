import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import colors from 'utils/styles/colors';
import { selectDrawer } from 'state/selectors';
import { toggleDrawer } from 'state/drawer/drawerReducer';
import { useSelector, useDispatch } from 'react-redux';

function SideDrawer({ drawerWidth }) {
    // const [mobileOpen, setMobileOpen] = useState(false);

    const mobileOpen = useSelector(selectDrawer).isOpen;
    const dispatch = useDispatch();
    const handleDrawerToggle = () => {
        dispatch(toggleDrawer());
    };

    const drawer = (
        <div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List sx={{ overflowX: 'scroll' }}>
                {[
                    'All mail',
                    'Trash',
                    'Spam Send email Send email Send email',
                ].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                            primary={text}
                            sx={{ whiteSpace: 'nowrap' }}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{
                width: { md: drawerWidth },
                flexShrink: { md: 0 },
            }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        top: '64px',
                        backgroundColor: colors.backgroundDark,
                        color: colors.white,
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        top: '64px',
                        backgroundColor: colors.backgroundDark,
                        color: colors.white,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default SideDrawer;
