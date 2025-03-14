import { Button, Container } from '@mui/material'
import React from 'react'
import "./css/Popup.css"
import { motion } from 'framer-motion';

function Popups(props) {
  return (props.trigger)? (
    <div className='popup'>
        <motion.div 
        animate={{scale:1}}
        initial={{scale:0}}
        className='popup-inner'>
            <Container>
                {props.children}
            </Container>
            <Container>
                <Button className='popup-button'
                  onClick={()=>{
                    props.setSubmitButton(true)
                    props.setCloseButton(false)}}>{props.buttonTitle}</Button>
                <Button className='popup-button' onClick={()=>props.setCloseButton(false)}>Close</Button>
            </Container>
        </motion.div>
    </div>
  ): ""
}

export default Popups;
