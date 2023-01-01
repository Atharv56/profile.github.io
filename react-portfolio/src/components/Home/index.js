import { useEffect, useState } from 'react'
//import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [ ' ', 'A', 't', 'h', 'a', 'r', 'v']
    const from = ['f', 'r', 'o', 'm']
    const jobArray = ['S', 'y', 'n', 't', 'a', 'x', ' ', 'E', 'n', 'e', 'm', 'i', 'e' ,'s']

    useEffect( ()=>{
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <div className = 'container home-page'>
            <div className='text-zone'>
                <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        
                    <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                {/* <img src={LogoTitle} alt='developer' /> */}
                <AnimatedLetters letterClass= {letterClass} 
                strArray = {nameArray}
                idx = {15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray= {from} idx={1} />
                <br />
                <AnimatedLetters letterClass= {letterClass} 
                strArray = {jobArray}
                idx = {22}
                />
                </h1>
                <h2>Frontend Development / Machine Learning / Social Work</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        </>
        
    )
}

export default Home;
