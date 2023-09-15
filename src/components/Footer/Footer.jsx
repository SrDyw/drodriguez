import React from 'react'
import BussinesName from '../BussinesName'

export default function Footer() {
  return (
    <footer className='flex-center'>
        <h2 style={{fontWeight:'lighter'}}>Copyright © <BussinesName type={'span'} styles={{fontWeight:'bold'}}/> 2023</h2>
    </footer>
  )
}
