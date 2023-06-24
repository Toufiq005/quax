import './ContactSection.css'

export default function ContactSection(props) {
  return (
    <section className={'w-full h-auto flex items-center justify-center' + " " + (props.bgColor)}>
      <div className='wrapper contact-section flex flex-col items-center justify-center max-lg:w-full'>
        <h1 className='pt-10'>Send us a message</h1>
        <p>The European language are memb of the same family. Their separate is a myth. For science Europe the same vocabulary.</p>
        <form className='flex flex-col justify-center items-center max-lg:w-full pb-10'>
          <div className='flex items-center max-lg:flex-col max-sm:w-full'>
            <input type="text" placeholder='First Name' required className={'mr-4 max-lg:mr-0' + " " + (props.inputColor)} />
            <input type="text" placeholder='Last Name' required className={'mr-4 max-lg:mr-0' + " " + (props.inputColor)} />
          </div>
          <div className='flex items-center max-lg:flex-col max-sm:w-full'>
            <input type="text" placeholder='Phone NO' required className={'mr-4 max-lg:mr-0' + " " + (props.inputColor)} />
            <input type="text" placeholder='Subject ...' className={'mr-4 max-lg:mr-0' + " " + (props.inputColor)}  />
          </div>
          <textarea name="message" cols="30" rows="10" placeholder='Type massege ...' className={props.inputColor} ></textarea>
          <button type='submit' >Submit Message</button>
        </form>
      </div>
    </section>
  )
}
