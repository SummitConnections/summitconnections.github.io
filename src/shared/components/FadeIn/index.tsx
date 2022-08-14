import * as React from 'react';
import style from './FadeIn.module.css';

import { motion } from 'framer-motion';

export interface IFadeInProps {
    title: string,
    children?: React.ReactNode,
    ref: any
}

const FadeIn = React.forwardRef((props: IFadeInProps, ref) => {
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5}}
    >
      {props.children}
    </motion.div>
  );
})

FadeIn.displayName = 'FadeIn'

export default FadeIn;




