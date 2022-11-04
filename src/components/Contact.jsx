import Form from "./Form"

const Contact = ({dark}) => {
  return(
    <div id="contact"  className="grid justify-items-center mt-28">
      {dark==="false" ?
        <h2 className="text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Contactame</h2>
      :
        <h2 className="text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-great-blue-500 via-violet-600 to-emerald-700">Contactame</h2>
      }

      <Form/>
    </div>
  )
}

export default Contact