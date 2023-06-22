import './not-found.css'
import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/Sections/Banner/Banner'

export default function NotFound() {
  return (
    <>
    <Navbar bgColor="bg-white border-b" textColor="text-black/80"/>
    <Banner
        title="404 Not Found"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full min-h-screen flex items-center justify-center bg-color">
        <div className="wrapper w-full error flex flex-col items-center justify-center">
          <h1>404</h1>
          <h2>Oops! Page Note Found</h2>
          <p>
            The European language are memb of the same family. Their separate is
            a myth.
          </p>
          <a href="/">Home Page</a>
        </div>
      </section>
    </>
  )
}
