/* eslint-disable jsx-a11y/alt-text */
import { motion } from 'framer-motion'
import js from '../assets/skills/js.png'
import ts from '../assets/skills/typescript.png'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import bootstrap from '../assets/skills/bootstrap.png'
import tailwind from '../assets/skills/tailwind.png'
import chakra from '../assets/skills/chakra.png'
import react from '../assets/skills/react.png'
import redux from '../assets/skills/redux.png'
import node from '../assets/skills/node.png'
import express from '../assets/skills/express.png'
import postgre from '../assets/skills/postgre.png'
import sequelize from '../assets/skills/sequelize.png'
import prisma from '../assets/skills/prisma.png'
import jwt from '../assets/skills/jwt.png'
import git from '../assets/skills/git.png'
import nest from '../assets/skills/nest.png'
import next from '../assets/skills/next.png'
import next_auth from '../assets/skills/next-auth.png'
import mongo from '../assets/skills/mongo.png'

const techs = [
  { name: 'JavaScript', image: js },
  { name: 'TypeScript', image: ts },
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'Bootstrap', image: bootstrap },
  { name: 'Tailwind', image: tailwind },
  { name: 'Chakra UI', image: chakra },
  { name: 'React', image: react },
  { name: 'Redux', image: redux },
  { name: 'NextJs', image: next },
  { name: 'Next-Auth', image: next_auth },
  { name: 'Node', image: node },
  { name: 'Express', image: express },
  { name: 'NestJs', image: nest },
  { name: 'MongoDB', image: mongo },
  { name: 'PostgreSQL', image: postgre },
  { name: 'Sequelize', image: sequelize },
  { name: 'Prisma', image: prisma },
  { name: 'JWT', image: jwt },
  { name: 'Git', image: git },
]

const Techs = ({ dark }) => {
  return (
    <div id='techs' className='grid justify-items-center mt-16 pt-10'>
      {dark === 'false' ? (
        <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
          Tecnologias
        </h2>
      ) : (
        <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-great-blue-500 via-violet-600 to-emerald-700'>
          Tecnologias
        </h2>
      )}

      <div className='mt-5 mb-1 flex flex-wrap justify-center max-w-2xl gap-4'>
        {techs.map((e) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            key={e.name}
            className='grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110'
          >
            <img
              src={e.image}
              className={e.name === 'Bootstrap' ? 'brightness-150 h-20' : 'h-20'}
              width={80}
              height={80}
            />
            <h4>{e.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Techs
