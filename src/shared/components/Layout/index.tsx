import * as React from 'react';
import styles from './Layout.module.css'

import Image from 'next/image';
import { Grid, Stack, Button, ButtonBase, IconButton, Drawer, MenuItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { scrollToSection } from 'src/shared/functions/helpers';

export interface ILayoutProps {
    children?: React.ReactNode,
    sections: any[]
}

function Layout (props: ILayoutProps) {
    const [mobileDrawerOpen, setMobileOpenDrawer] = React.useState(false);

    const getButtonColor = (section: any) => {
        if (section.title !== 'Enquire Now!') {
            if (section.inView) return 'info'
            return 'primary'
        } else {
            return 'secondary'
        }
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
                            >
                                <MenuIcon htmlColor='#ffffff'/>
                            </IconButton>
                            <Drawer
                                open={mobileDrawerOpen}
                                onClose={() => setMobileOpenDrawer(false)}
                            >
                                <Stack height="64px" padding="10px" margin={0} alignItems="center" justifyContent="center" >
                                    <h3> SECTIONS </h3>
                                </Stack>
                                <Divider/>
                                {props.sections.map((section) => (
                                    <MenuItem key={section.title} onClick={() => { scrollToSection(section.ref)}}>
                                        {section.title}
                                    </MenuItem>
                                ))}
                            </Drawer>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={8}>
                        <Stack direction="row" alignItems="center" justifyContent="center" width="100%" height="100%"> 
                            <ButtonBase onClick={() => scrollToSection()}>
                                <Image src="/assets/shared/Layout/Logo.svg" height="64px" width="160px" alt="Summit Connections Logo"/>
                            </ButtonBase>
                        </Stack>
                    </Grid> 
                </Grid>
                
                {/* DESKTOP */}
                <Grid container className={styles.navbar}>
                    <Grid item xs={3}>
                        <Stack direction="row" alignItems="center" justifyContent="center" width="100%" height="100%"> 
                            <ButtonBase onClick={() => scrollToSection()}>
                                <Image src="/assets/shared/Layout/Logo.svg" height="64px" width="160px" alt="Summit Connections Logo"/>
                            </ButtonBase>
                        </Stack>
                    </Grid>
                    <Grid item xs>
                        <Stack direction="row" alignItems="center" justifyContent="center" height="100%" spacing={1}>
                            { props.sections.map((section) => {
                                return (
                                    <Button key={section.title}  variant='contained' color={getButtonColor(section)} onClick={() => { scrollToSection(section.ref)}}>
                                        { section.title !== 'Enquire Now!' && <> {section.title} </>}
                                        { section.title === 'Enquire Now!' && 
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <ContactMailIcon/>
                                                <h3 className={styles.enquireText}> {section.title} </h3>
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

export default Layout;