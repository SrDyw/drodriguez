import React from 'react'

export default function AboutCard({title, desc }) {
  return (
    <div className='about_card'>
        <h2>{title}</h2>
        {desc.map((d, key) => (
            <p key={key}>{d.text}</p>
        ))}
    </div>
  )
}
