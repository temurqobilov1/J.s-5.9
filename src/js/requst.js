async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}


export default getData;