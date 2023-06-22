import "./SubscribeSection.css"

export default function SubscribeSection() {
  return (
    <section className="w-full min-h-screen bg-color flex items-center justify-center">
      <div className="subscribe-section bg-header flex flex-col items-center justify-center">
        <h1>Get Your Site Optimized & Converting Now</h1>
        <form
          data-aos="zoom-in"
          className="max-md:flex flex-col items-center justify-center"
        >
          <input
            type="email"
            placeholder="&#xf0e0;   e-mail address"
            style={{ fontFamily: "FontAwesome" }}
            className="bg-transparent text-white placeholder:text-white"
          />
          <button type="submit">SUBSCRIBE NOW</button>
        </form>
      </div>
    </section>
  )
}
