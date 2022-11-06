import { useFormik } from "formik"
 import * as Yup from 'yup';

const Form = () =>{
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },

    onSubmit: (values)=>{
      console.log(values)
    },

    validationSchema : Yup.object({
      name: Yup.string().required("Nombre requerido"),
      email: Yup.string().required("Email requerido").email("Email no valido"),
      message: Yup.string().required("Mensaje requerido")
    })
  })  

  return(
    <div className="w-full max-w-lg p-7 justify-center mb-10">
      <form onSubmit={formik.handleSubmit}>
        
        <label className="block mb-2 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Nombre</label>
        <input type="text" name="name" placeholder="Nombre" className="shadow border border-gray-300 rounded-lg bg-gray-100 w-full max-w-lg h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 dark:bg-transparent dark:text-white" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <span className="text-xs font-bold text-red-700 flex justify-end dark:text-red-400">{formik.touched.name && formik.errors.name}</span>

        <label className="block mb-2 mt-6 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="text" name="email" placeholder="Email" className="shadow border border-gray-300 rounded-lg bg-gray-100 w-full max-w-lg h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 dark:bg-transparent dark:text-white" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <span  className="text-xs font-bold text-red-700 flex justify-end dark:text-red-400">{formik.touched.email && formik.errors.email}</span>

        <label className="block mt-6 mb-2 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Mensaje</label>
        <textarea name="message" className="block p-2 py-2 px-3 w-full max-w-md h-28 text-md text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:outline-blue-300 dark:bg-transparent dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 dark:focus:border-transparent" placeholder="Tu message..."value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} ></textarea>
        <span  className="text-xs font-bold text-red-700 flex justify-end dark:text-red-400">{formik.touched.message && formik.errors.message}</span>

        <button type="submit" className="border rounded-md text-lg mt-3 py-2 px-6 bg-cyan-800 text-white">Enviar</button>
      </form>
    </div>
  )
}

export default Form