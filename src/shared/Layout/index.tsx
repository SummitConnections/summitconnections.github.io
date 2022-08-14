import * as React from 'react';
import styles from './Layout.module.css'

import Image from 'next/image';
import { Grid, Stack, Box, Button, ButtonBase, IconButton, Menu, MenuItem, Drawer, Divider, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export interface ILayoutProps {
    children?: React.ReactNode,
    mobile?: boolean
}

export function Layout (props: ILayoutProps) {
    const mobileNavbar = props.mobile
    const sections = ['About', 'Offer', 'Plan', 'Testimonials', 'Education', 'Enquire Now!'];
    const [mobileDrawerOpen, setMobileOpenDrawer] = React.useState(false);

    const goToSection = (section: string) => {

    }

    return (
        <>
            {/* NAVBAR / HEADER */}
            <header className={styles.header}>

                {/* MOBILE */}
                <Grid container className={styles.mobileNavbar}>
                    <Grid item xs={2}>
                        <Stack direction="row" alignItems="center" justifyContent="center" height="100%" marginLeft="20px" width="50%">
                            <IconButton
                                size="large"
                                onClick={() => setMobileOpenDrawer(true)}
                                color="primary"
                            >
                                <MenuIcon color="secondary"/>
                            </IconButton>
                            <Drawer
                                open={mobileDrawerOpen}
                                onClose={() => setMobileOpenDrawer(false)}
                            >
                                <Stack height="64px" padding="10px" margin={0} alignItems="center" justifyContent="center" >
                                    <h3> SECTIONS </h3>
                                </Stack>
                                <Divider/>
                                {sections.map((section) => (
                                    <MenuItem key={section} onClick={() => { goToSection(section)}}>
                                        {section}
                                    </MenuItem>
                                ))}
                            </Drawer>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={8}>
                        <Stack direction="row" alignItems="center" justifyContent="center" width="100%" height="100%"> 
                            <ButtonBase>
                                <Image src="/assets/shared/Layout/Logo.svg" height="64px" width="160px" alt="Summit Connections Logo"/>
                            </ButtonBase>
                        </Stack>
                    </Grid> 
                </Grid>
                
                {/* DESKTOP */}
                <Grid container className={styles.navbar}>
                    <Grid item xs={3}>
                        <Stack direction="row" alignItems="center" justifyContent="center" width="100%" height="100%"> 
                            <ButtonBase>
                                <Image src="/assets/shared/Layout/Logo.svg" height="64px" width="160px" alt="Summit Connections Logo"/>
                            </ButtonBase>
                        </Stack>
                    </Grid>
                    <Grid item xs>
                        <Stack direction="row" alignItems="center" justifyContent="center" height="100%" spacing={1}>
                            { sections.map((section) => {
                                return (
                                    <Button key={section} variant='contained' color={section !== 'Enquire Now!' ? 'primary' : 'secondary'} onClick={() => { goToSection(section)}}>
                                        { section !== 'Enquire Now!' && <> {section} </>}
                                        { section === 'Enquire Now!' && 
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <ContactMailIcon/>
                                                <h3 className={styles.enquireText}> Enquire Now! </h3>
                                            </Stack>
                                        }
                                    </Button>
                                )
                            })}
                        </Stack> 
                    </Grid>
                </Grid>
            </header>

            {/* MAIN CONTENT */}
            <main className={styles.main}>
                {props.children}
            </main>

            {/* FOOTER */}
            <footer className={styles.footer}>
               
            </footer>
        </>
    );
}