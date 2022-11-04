/* eslint-disable jsx-a11y/alt-text */

const Techs = () => {
  return(
    <div id="techs" className="grid justify-items-center mt-28">
      <h2 className="text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Tecnologias</h2>
      <h2 className="text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-great-blue-500 via-violet-600 to-emerald-700">Tecnologias</h2>

     <div className="mt-5 mb-1 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="js.png" className="h-20" width={80} height={80}/>
          <h4>JavaScript</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="typescript.png" className="h-20" width={80} height={80}/>
          <h4>TypeScript</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="html.png" className="h-20" width={80} height={80}/>
          <h4>HTML</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="css.png" className="h-20" width={80} height={80}/>
          <h4>CSS</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img className="brightness-150 h-20" src="bootstrap.png" width={80} height={80}/>
          <h4 >Bootstrap</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="react.png" className="h-20" width={80} height={80}/>
          <h4>React.js</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="redux.png" className="h-20" width={80} height={80}/>
          <h4>Redux</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="node2.png" className="h-20" width={80} height={80}/>
          <h4>Node.js</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="express.png" className="h-20" width={80} height={80}/>
          <h4>Express</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="tailwind.png" className="h-20" width={80} height={80}/>
          <h4>Tailwind</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="postgre.png" className="h-20" width={80} height={80}/>
          <h4>PostgreSQL</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="sequelize.png" className="h-20" width={80} height={80}/>
          <h4>Sequelize</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="prisma.png" className="h-20" width={80} height={80}/>
          <h4>Prisma</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="jwt.png" className="h-20" width={80} height={80}/>
          <h4>JWT</h4>
        </div>
        <div className="grid gap-2 justify-items-center border rounded-lg p-2 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700 hover:scale-110">
          <img src="git.png" className="h-20" width={80} height={80}/>
          <h4>Git</h4>
        </div>
      </div>
    </div>
  )
}

export default Techs