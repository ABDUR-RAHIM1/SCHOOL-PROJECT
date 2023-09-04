import React from 'react'
import Principle from './SIdebarContent/Principle'
import President from './SIdebarContent/President'
import ImpotentLink from './SIdebarContent/ImpotentLink'
import NationalMusic from './SIdebarContent/NationalMusic'
import HelpLIne from './SIdebarContent/HelpLIne'
import Social from './SIdebarContent/Social'
import Video from './SIdebarContent/Video'

function SIdebar() {
  return (
    <>
       <Principle/>
       <President/>
       <ImpotentLink />
       <NationalMusic/>
       <HelpLIne/>
       <Video/>
       <Social/>
    </>
  )
}

export default SIdebar