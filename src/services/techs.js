export const getTechs = async () => {
  return await fetch(`${process.env.REACT_APP_API_URI}/techs`)
    .then((techs) => techs.json())
    .catch((err) => console.log(err))
}
