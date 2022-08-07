
function capitalizeEachWord(str) {

  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
}

export const GifItem = ( { title, url } ) => {

  title = capitalizeEachWord(title);

  return (
    <div className="card">
      <img src={ url } alt={ title }/>
      <p>{ title }</p>
    </div>
  )
}