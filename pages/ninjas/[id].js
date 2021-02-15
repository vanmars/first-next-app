// Tells Next how many HTML pages it needs to render
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false // deals with fallback pages
  }
} // another function that will run at build time, and inside it we return all the possible values for the route parameters, so NEXT will know to generate a route and html page for each

// Then, for each page, Next will run this function, which we can use to create props to send to component. It comes with a context object we can use to grab the ids.
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
  const data = await res.json();

  return {
    props: {
      ninja: data
    }
  }
}

const Details = ({ ninja }) => {
  return ( 
    <div>
      <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
   );
}
 
export default Details;