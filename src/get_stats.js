async function get_stats(){
  let mangaCount = await fetch(process.env.REACT_APP_API_URL)
  .then(res => res.json())
  console.log(mangaCount)
  return mangaCount
}

export default get_stats