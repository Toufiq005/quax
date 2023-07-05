import "./Banner.css"

export default function Banner(props) {
  return (
    <section className='banner'>
      <h1 className={props.className}>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  )
}
