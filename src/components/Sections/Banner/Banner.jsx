import "./Banner.css"

export default function Banner(props) {
  return (
    <section className='banner'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  )
}
