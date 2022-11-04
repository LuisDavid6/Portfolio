import { Formik } from "formik"

const Form = () =>{
  return(
    <div>
      <Formik 
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}

        onSubmit = {(values)=>{

        }}
      >

        {()=> (

          <form>
            {/* <label>Nombre: </label>
            <input type="text"/> */}
          </form>


        )}

      </Formik>
    </div>
  )
}

export default Form