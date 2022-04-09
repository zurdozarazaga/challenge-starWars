
//get method that receives the page number as a parameter
export async function getCharacter(page = 1) {
  const url = process.env.REACT_APP_STAR_WAR_API
  console.log(url);
  try {
    const response = await fetch( url + `/people/?page=${page}`);
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}