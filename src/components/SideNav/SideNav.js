import React,{useState} from 'react'
import { motion } from "framer-motion"
import Toggle from './Toggle'
import Items from './Items'
//import './style.css'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

function SideNav() {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <div>
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
      <Items />
    </motion.nav>
    </div>
    )
}

export default SideNav
