export const getProjects = async () => {
  return await fetch(`${process.env.REACT_APP_API_URI}/projects`)
    .then((projects) => projects.json())
    .catch((err) => console.log(err))
}
