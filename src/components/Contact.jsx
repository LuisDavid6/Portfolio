import Form from './Form'
import { RiLinkedinBoxFill, RiGithubFill, RiWhatsappFill } from 'react-icons/ri'
import { TiMail } from 'react-icons/ti'
import { motion } from 'framer-motion'
import contact from '../assets/contact2.png'

const Contact = ({ dark }) => {
  const shadow =
    dark === 'false' ? '0px 5px 25px rgba(0, 0, 0, 0.3)' : '0px 5px 25px rgba(0, 0, 0, 35)'

  return (
    <div id='contact' className='flex flex-col items-center mt-16'>
      {dark === 'false' ? (
        <h2 className='text-4xl p-1 mb-14 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
          Contacto
        </h2>
      ) : (
        <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-great-blue-500 via-violet-600 to-emerald-700'>
          Contacto
        </h2>
      )}

      <div className='flex flex-wrap w-full justify-center gap-16 '>
        <motion.div
          animate={{ boxShadow: shadow }}
          className=' p-4 mt-24 dark:text-white h-full rounded-2xl'
        >
          <div className='flex justify-center gap-3 mb-4'>
            <img alt='contact' src={contact} width='110px' className='-mt-11'></img>
          </div>
          <div className='flex gap-3 mb-4'>
            <RiLinkedinBoxFill color='#3192F0' size={40} />
            <span className='self-center font-mono text-xs'>linkedin.com/in/luis-david-patino</span>
          </div>
          <div className='flex gap-3 mb-4'>
            <RiGithubFill color={dark === 'true' ? 'white' : 'black'} size={40} />
            <span className='self-center font-mono text-xs'>github.com/LuisDavid6</span>
          </div>
          <div className='flex gap-3 mb-4'>
            <TiMail color='' size={40} />
            <span className='self-center font-mono text-xs'>luisdavid.0698@gmail.com</span>
          </div>
          <div className='flex gap-3'>
            <RiWhatsappFill color='#40CF49' size={40} />
            <span className='self-center font-mono text-xs'>+57 3134423350</span>
          </div>
        </motion.div>
        <Form dark={dark} />
      </div>
    </div>
  )
}

export default Contact
