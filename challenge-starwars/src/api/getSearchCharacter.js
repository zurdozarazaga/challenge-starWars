export async function getSearchCharacter(name) {
  const url = process.env.REACT_APP_STAR_WAR_API
  try {
    const response = await fetch( url + `/people/?search=${name}`);
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}