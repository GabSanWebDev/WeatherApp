import React from 'react';
import styles from '../styles/About.module.css'
import {FaRegSmileBeam} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

export default function About(){
    return (<div className={styles.container}>
    <h2 className={styles.title}>About Weather app</h2>
    <p className={styles.text}>Weather app is a small project made during my time in Soy Henry's bootcamp, this project served as a good practice and my very first react project, the information brought to you through this app comes directly from https://openweathermap.org/.
    I hope you've enjoyed your time using my app!</p>

    <h2 className={styles.title}>About me</h2>
    <p className={styles.text}>Hi, i'm the person behind this project, my name is Gabriel Sanchez, i'm a venezuelan programming student living in Buenos Aires, as you could read before this app is my first project using react, but if you're interested in checking more of my work i will list my LinkedIn and GitHub somewhere below this text so you can check them out and some of my social media too so we can keep in touch < FaRegSmileBeam/></p>
    <div className={styles.iconsContainer}>
    <a className={styles.icons} href="https://www.linkedin.com/in/gabriel-sanchez-a6b5b7150/" target="_blank" rel="noreferrer">< GrLinkedin /></a>
    <a className={styles.icons} href="https://github.com/GabSanWebDev" target="_blank" rel="noreferrer">< FaGithub /></a>
    <a className={styles.icons} href="https://www.instagram.com/gabrielsnchz_/" target="_blank" rel="noreferrer">< FaInstagram /></a>
    <a className={styles.icons} href="https://twitter.com/GabrielSnchz" target="_blank" rel="noreferrer">< FaTwitter /></a>
    </div>
    </div>)
}