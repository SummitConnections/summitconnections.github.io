import type { NextPage } from 'next'
import { Layout } from 'src/shared/Layout'
import styles from './home.module.css'
import { Box, Button, Fab, Stack } from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { About } from './components/About';
import { Offer } from './components/Offer';
import { Plan } from './components/Plan';
import { Testimonials } from './components/Testimonials';
import { Education } from './components/Education';
import { Enquire } from './components/Enquire';

const Home: NextPage = () => {
  return (
    <Layout>
        <Stack className={styles.backdrop} alignItems="center" height="100%" justifyContent="center" textAlign="center">
          <h1> Control Your Future </h1>
          <h1> Through Education</h1>
          <p> Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr. </p> 
          <Stack direction="row" textAlign="center" spacing={2}>
            <Button variant="contained"> Read more </Button>
            <Button variant="contained" color="secondary" className={styles.enquireNowButton}> 
              <Stack direction="row" alignItems="center" spacing={1}>
                <ContactMailIcon/>
                <h3> Enquire Now! </h3>
              </Stack>
            </Button>
          </Stack>
        </Stack>
        <Stack className={styles.content} spacing={2}>
          <About/>
          <Offer/>
          <Plan/>
          <Testimonials/>
          <Education/>
          <Enquire/>
        </Stack>
        <Fab variant="extended" color='secondary'>
          <Stack direction="row" alignItems="center" spacing={1}>
            <ContactMailIcon/>
            <h3> Enquire Now! </h3>
          </Stack>
      </Fab>
    </Layout>
  )
}

export default Home
