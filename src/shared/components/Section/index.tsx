import * as React from 'react';
import styles from './Section.module.css';

import FadeIn from 'src/shared/components/FadeIn';
import { Stack, Divider } from '@mui/material';

export interface ISectionProps {
    title: string,
    ref: any,
    children?: React.ReactNode
}

const Section = React.forwardRef((props: ISectionProps, ref) => {
  return (
    <FadeIn title={props.title} ref={ref}>
        <Stack className={styles.content} spacing={4}>
          <Stack alignItems={"center"} textAlign="center">
            <h1 className={styles.title}> {props.title} </h1>
          </Stack>
          <Stack height="100vh"> 
            {props.children}
          </Stack>
          <Divider/>
        </Stack>
    </FadeIn>
  );
})

Section.displayName = 'Section'

export default Section