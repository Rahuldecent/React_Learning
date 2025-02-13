import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 5000)
    })
    console.log(data, "data")
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name:</label>
        <input {...register('firstName', { required: true, minLength: 3 })} />
        <br />
        <br />

        <label>Middle Name:</label>
        <input  {...register('middleName')} />
        <br />
        <br />

        <label>last Name:</label>
        <input {...register('lastName')} />
        <br />
        <br />

        <label>Age:</label>
        <input {...register('age')} />
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "Submit"} />
      </form>
    </>
  )
}

export default App
