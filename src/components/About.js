import React from 'react';
import Links from './links';

function About({bio,links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {links ? <Links github={links.github} linkedin={links.linkedin} /> : null}
    </div>
  );
}

export default About;

