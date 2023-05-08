import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import React from 'react';
import './style.scss';

const socialNetworking = [
    {name: 'linkedin', icon: <FaLinkedinIn/> },
    {name: 'github', icon: <FaGithub/> },
    {name: 'instagram', icon: <FaInstagram/>},
];

const SocialNetworking = () => {
  return <section id="social-net">
    {socialNetworking.map((network) => (
      <a href="#" className='social-btn' id={network.name}key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
}

export default SocialNetworking

