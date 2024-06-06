const Footer = () => {
  return (
    <section id='Footer'>
      <div id="footer" className=' bg-gray-700 w-full h-auto text-white p-5'>

        <div className='flex flex-col justify-center items-center space-y-20 lg:flex-row lg:justify-around lg:items-start lg:space-y-0 lg:space-x-10 py-5 max-w-[1150px] mx-auto'>
          
          <div className='flex flex-col justify-around items-center md:items-start space-y-8'>
          <h1 className='text-2xl text-white font-semibold lg:text-3xl'>MediBot</h1>
            <p className='text-gray-200 text-center lg:w-[500px] lg:text-left'>MediBot is dedicated to making healthcare accessible and convenient for everyone. Our advanced AI-driven chatbot provides accurate and reliable medical information to help you manage your health effectively.</p>
            <h1 className='text-xl lg:text-2xl'>Subscribe To Our Newsletter</h1>
            <div className='flex flex-col space-y-4'>
            <input className='rounded-2xl p-2 w-[400px]' type="text" name="" id="" placeholder='Enter your email address' />
              <button className='text-lg w-full bg-white text-blue-600 rounded-2xl py-1 hover:bg-gradient-to-r from-cyan-100 to-cyan-300 hover:-translate-y-1 hover:text-white duration:300'>Subscribe</button>
            </div>
              
          </div>
          <div className='flex justify-between items-start space-x-20'>
            <div className='flex flex-col justify-center items-start space-y-2'>
              <h1 className='text-lg font-bold'>Quick Links</h1>
                <p>Home</p>
                <p>Services</p>
                <p>About Us</p>
                <p>FAQ</p>
                <p>Contact</p>
                <p>Primary</p>
            </div>
            <div className='flex flex-col justify-center items-start space-y-2'>
            <h1 className='text-lg font-bold'>Follow Us</h1>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
            </div>
            <div className='flex flex-col justify-center items-start space-y-2'>
            <h1 className='text-lg font-bold'>About</h1>
                <p>FAQs</p>
                <p>Carrers</p>
                <p>Contact Us</p>
            </div>
          </div>
          </div>

          <div className='flex flex-col justify-center items-center space-y-5 mt-10 max-w-[1100px] mx-auto'>
            <h1 className='text-2xl font-semibold'>Disclaimer</h1>
            <p className='text-center text-gray-200'>MediBot provides information for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
            <h1>© 2024 MediBot. All rights reserved.</h1>
          </div>
        </div>
        
    </section>
  )
}

export default Footer
