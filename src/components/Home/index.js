import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect , useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 

    const nameArray = ['F', 'e', 'r', 'n', 'a', 'n', 'd', 'o', ' ', 'G', 'h', 'e', 'r', 'i', 'n', 'i']
    const jobArray = [
        's',
        'o',
        'u',
        'n',
        'd',
        ' ',
        'd',
        'e',
        's',
        'i',
        'g',
        'n',
        'e',
        'r',
        '.',
      ]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5000)
      }, [])
      

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm 
                <br /> 
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={31}
                />
                </h1>
                <h2> Sound Designer | Composer | Audio Engineer </h2>
                <p>Check out my Demo Reel, better enjoyed with headphones and fullscreen mode.</p>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className='demo-reel'>
                <iframe class="iframe" width="800" height="480"  src="https://www.youtube.com/embed/A9XOqmbRS-o"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    Your browser does not support the video tag.
                </iframe>
            </div>
        </div>
        <Loader type='line-scale-pulse-out'></Loader>
        </>
    )
}

export default Home
