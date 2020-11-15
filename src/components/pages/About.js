import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h1 style={h1Center}>About</h1>
      <p style={pCenter}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus.</p>
    </React.Fragment>
  )
}


export default About;

const h1Center = {
  textAlign: 'center',
  padding: '10px'
}

const pCenter = {
  textAlign: 'center',
  padding: '10px'
}

