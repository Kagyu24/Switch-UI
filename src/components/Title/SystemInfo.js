import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Clock from 'react-live-clock';

export const SystemInfo = () =>
{
    return (
        <System initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: .2 }}>
            <Clock format={'h:mm A'} ticking={true} />
            <Wifi>
            <svg  width="32" height="32" viewBox="0 0 24 24"
                        strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                    </svg>
            </Wifi>
            <Battery>
                <p>100%</p>
                <svg width="32" height="32" viewBox="0 0 24 24"
                        strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2">
                        </path>
                        <line x1="7" y1="10" x2="7" y2="14"></line>
                        <line x1="10" y1="10" x2="10" y2="14"></line>
                        <line x1="13" y1="10" x2="13" y2="14"></line>
                        <line x1="16" y1="10" x2="16" y2="14"></line>
                    </svg>
            </Battery>
        </System>
    );
};

const System = styled(motion.div)`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
z-index: 2;
position: absolute;
left: 2%;
top: 2%;
font-size: 1.2rem;
font-weight: 600;
gap: 10px;
text-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);
-webkit-text-shadow:1px 5px 10px rgba(0, 0, 0, 0.3);
-moz-text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
`;

const Wifi = styled.div`
display: flex;
justify-content: center;
align-items: center;`

const Battery = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 5px;`