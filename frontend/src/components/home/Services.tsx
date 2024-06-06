const Services = () => {
  return (
        <div id="services" className='w-full h-auto md:h-screen p-5 pt-20 bg-[#05101c]'>
            <div className='flex flex-col justify-center items-center space-y-10 max-w-[1100px] mx-auto'>
                <h1 className=' font-semibold lg:text-lg'>SERVICES</h1>
                <h1 className='text-3xl font-bold underline lg:text-4xl'>What We Do</h1>
                <p className='max-w-[520px] text-center lg:text-lg lg:leading-10'>Welcome to MediBot, where we're dedicated to providing comprehensive medical information tailored to our needs. Here's how we can help:</p>
                <div className='flex flex-col justify-center items-center space-y-5 md:flex-row md:space-x-5 md:justify-between md:items-center cursor-pointer'>
                    <div className='flex flex-col justify-center items-center bg-white p-5 space-y-5 rounded-2xl mt-5 shadow-lg shadow-blue-200 bg-gradient-to-r from-cyan-700 to-purple-900 hover:scale-110 duration-300'>
                        <h1 className='text-2xl font-bold'>Symptom Checker</h1>
                        <p>
                        Feeling unwell? Describe your symptoms to MediBot, and we'll help you identify potential causes and suggest the next steps. Our advanced AI ensures you receive accurate and timely advice to guide your health decisions.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white p-5 space-y-5 rounded-2xl mt-5 shadow-lg shadow-blue-200 bg-gradient-to-b from-cyan-700 to-purple-900 hover:scale-110 duration-300'>
                        <h1 className='text-2xl font-bold'>Medication Information</h1>
                        <p>
                        Confused about your prescriptions? MediBot provides detailed information about your medications, including usage instructions, possible side effects, and interactions with other drugs. Stay informed and manage your medication safely.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white p-5 space-y-5 rounded-2xl mt-5 shadow-lg shadow-blue-200 bg-gradient-to-l from-cyan-700 to-purple-900 hover:scale-110 duration-300'>
                        <h1 className='text-2xl font-bold'>Personalized Health Tips</h1>
                        <p>
                        Want to enhance your well-being? MediBot delivers personalized health tips based on the latest medical research. Whether it's advice on nutrition, exercise, or mental health, we offer insights tailored just for you.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Services
