import type { NextPage } from 'next'
import styles from './home.module.css'

import Layout from 'src/shared/components/Layout'
import { Button, Fab, Stack } from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import About from './components/About';
import Offer from './components/Offer';
import Plan from './components/Plan';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Enquire from './components/Enquire';
import Section from 'src/shared/components/Section';
import { useRef } from 'react';
import { useIntersection } from 'src/shared/functions/viewport';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { scrollToSection } from 'src/shared/functions/helpers';

const Home: NextPage = () => {

  const aboutRef = useRef()
  const offerRef = useRef()
  const planRef = useRef()
  const testimonialsRef = useRef()
  const educationRef = useRef()
  const enquireRef = useRef()

  const aboutInView = useIntersection(aboutRef, '-50%')
  const offerInView = useIntersection(offerRef, '-50%')
  const planInView = useIntersection(planRef, '-50%')
  const testimonialsInView = useIntersection(testimonialsRef, '-50%')
  const educationInView = useIntersection(educationRef, '-50%')
  const enquireInView = useIntersection(enquireRef, '-50%')
  
  const sections = [
    { 
      title: 'About',
      ref: aboutRef,
      inView: aboutInView
    },
    { 
      title: 'Offer',
      ref: offerRef,
      inView: offerInView
    },
    { 
      title: 'Plan',
      ref: planRef,
      inView: planInView
    },
    { 
      title: 'Testimonials',
      ref: testimonialsRef,
      inView: testimonialsInView
    },
    { 
      title: 'Education',
      ref: educationRef,
      inView: educationInView
    },
    { 
      title: 'Enquire Now!',
      ref: enquireRef,
      inView: enquireInView
    }
  ]

  return (
    <Layout sections={sections}>
        <Stack className={styles.backdrop} alignItems="center" justifyContent="center" textAlign="center">
          <h1> Slogan for Summit Connections </h1>
          <h1> Goes here </h1>
          <p> Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr. </p> 
          <Stack direction="row" textAlign="center" spacing={2}>
            <Button variant="contained" color="primary" onClick={() => scrollToSection(sections.filter(s => s.title === 'About')[0].ref)}> 
              <Stack direction="row" alignItems="center" spacing={1}>
                <ArrowCircleDownIcon/>
                <h3> Read more </h3>
              </Stack>
            </Button>
            <Button variant="contained" color="secondary" className={styles.enquireNowButton} onClick={() => scrollToSection(sections.filter(s => s.title === 'Enquire Now!')[0].ref)}> 
              <Stack direction="row" alignItems="center" spacing={1}>
                <ContactMailIcon/>
                <h3> Enquire Now! </h3>
              </Stack>
            </Button>
          </Stack>
        </Stack>
        <Stack className={styles.content} spacing={2}>
          <Section title="About" ref={aboutRef}>
            <About/>
          </Section>
          <Section title="Offer" ref={offerRef}>
            <Offer/>
          </Section>
          <Section title="Plan" ref={planRef}>
            <Plan/>
          </Section>
          <Section title="Testimonials"  ref={testimonialsRef}>
            <Testimonials/>
          </Section>
          <Section title="Education" ref={educationRef}>
            <Education/>
          </Section>
          <Section title="Enquire" ref={enquireRef}>
            <Enquire/>
          </Section>
        </Stack>
        <Fab variant="extended" color='secondary' onClick={() => scrollToSection(sections.filter(s => s.title === 'Enquire Now!')[0].ref)}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <ContactMailIcon/>
            <h3> Enquire Now! </h3>
          </Stack>
      </Fab>
    </Layout>
  )
}

export default Home
