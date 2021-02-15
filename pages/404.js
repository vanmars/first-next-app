import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter(); // returns a router object, which contains a method to redirect user

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) // will take you back to previous page
      router.push('/');
    }, 3000)
  }, [])

  return ( 
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link a href="/"><a>Homepage</a></Link>.</p>
    </div>
   );
}
 
export default NotFound;