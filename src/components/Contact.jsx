import { CONTACT } from "../constants"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
        <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5, delay:1.5}}
          className="my-10 text-center text-4xl "
        >Get In Touch</motion.h2>
        <section id="contact" className="text-center tracking-tighter">
            <motion.address 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className="my-4"
            >{CONTACT.address}</motion.address>
            <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:1}}
             className="my-4"
            >{CONTACT.phoneNo}</motion.p>
            <a href="#">
                {CONTACT.email}
            </a>
            
        </section>
    </div>
  )
}

export default Contact