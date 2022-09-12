import React from 'react';
import './globalstyle.css';
import { Circles } from "../components/Circles";
import { Title } from "../components/Title/Title";
import { Unlock } from "../components/Title/Unlock";
import { SystemInfo } from "../components/Title/SystemInfo";
import { motion } from 'framer-motion';

const Titlescreen = () =>
{
    return (
        <motion.div className='body' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Circles />
            <SystemInfo />
            <Title />
            <Unlock />
        </motion.div>
    )
}

export default Titlescreen;