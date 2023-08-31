/* eslint-disable jsx-a11y/alt-text */
import { motion } from 'framer-motion'
import { useTechs } from '../hooks/useTechs'

const Techs = ({ dark }) => {
  const { data: techs } = useTechs()

  return (
    <div id='techs' className='grid justify-items-center mt-16 pt-10'>
      {dark === 'false' ? (
        <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Tecnologias</h2>
      ) : (
        <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-great-blue-500 via-violet-600 to-emerald-700'>
          Tecnologias
        </h2>
      )}

      <div className='mt-5 mb-1 flex flex-wrap justify-center max-w-2xl gap-4'>
        {techs?.map((e) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            key={e.name}
            className='grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110'
          >
            <img src={e.image} className={e.name === 'Bootstrap' ? 'brightness-150 h-20' : 'h-20'} width={80} height={80} />
            <h4>{e.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Techs
