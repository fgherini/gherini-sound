import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])


      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm("service_7sfmu1y", "template_928n2t7", form.current, 'BQk1DLD3v0eC14dcb')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }


    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Hello there! Don't hesitate to contact me using the form below or by e-mail. I'm always thrilled at the opportunity to talk about games, sound and music!

                    </p>
                

                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail} >
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
                <div className="info-map">
                    Fernando Gherini,
                    <br />
                    São Paulo - SP,
                    <br />
                    Brasil<br />
                    <br />
                    <span>fgherini@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[-23.5558, -46.6396]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-23.5558, -46.6396]}>
                        <Popup>
                        Fernando Lives Here!
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>

            </div>
            <Loader type='line-scale-pulse-out'></Loader>
        </>
    )
}

export default Contact