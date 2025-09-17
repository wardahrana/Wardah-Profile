import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
    <h1 className='text-4xl  font-bold text-center mb-8'>  About Me</h1>
    {/*Bio section */}
    <section className='mb-16'>
      <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>Im a passionate Full Stack Developer with expertise in building  modern web applications.With a strong foundation in both frontend & backend technologies, I create seamless user experiences and robust server-side solutions.</p>
    </section>
    {/*Skills Section */}
    <section className='mb-16'>
<h2  className=' section-title  '>Skills</h2>
<div  className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
<div className='bg-white dark:bg-dark/50  p-6 rounded-lg shadow-md  '>
  <FaCode className="h-8 w-8 text-primary mb-4"/>
  <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
  <ul className='text-secondary space-y-2'>
    <li>React Next.js</li>
    <li>TypeScript</li>
    <li>Tailwind  CSS</li>
    <li>HTML5 /CSS3</li>
  </ul>
</div>
<div className='bg-white dark:bg-dark/50  p-6 rounded-lg shadow-md  '>
  <FaLaptopCode className="h-8 w-8 text-primary mb-4"/>
  <h3 className='text-xl font-semibold mb-2'>Backend</h3>
  <ul className='text-secondary space-y-2'>
    <li>Nodejs</li>
    <li>Express</li>
    <li>PostgreSQL</li>
    <li>Mongodb</li>
  </ul>
</div>
<div className='bg-white dark:bg-dark/50  p-6 rounded-lg shadow-md  '>
  <FaCode className="h-8 w-8 text-primary mb-4"/>
  <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
  <ul className='text-secondary space-y-2'>
    <li>Git/GitHub</li>
    <li>Docker</li>
    <li>AWS</li>
    <li>CLI/CD</li>
  </ul>
</div>
</div>
      </section>
      {/*Experience Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Experiences</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Junior Full Stack Developer</h3>
            <p className='text-primary mb-2'>Company Name . 2020 - Present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time  by 50%</li>
              <li>Learn through collegues and conducted code reviews</li>
            </ul>
          </div>
           <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Junior Full Stack Developer</h3>
            <p className='text-primary mb-2'>Company Name . 2020 - Present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time  by 50%</li>
              <li>Learn through collegues and conducted code reviews</li>
            </ul>
          </div>
           <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'> Full Stack Developer</h3>
            <p className='text-primary mb-2'>Previous Company 2018-2020</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Developed and maintained RestfulAPIs</li>
              <li>Build Responsive user-interfaces with modern Javascript frameworks</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </div>
        </div>
      </section>
      {/*Education Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Bachelor Science in Computer Science</h3>
            <p className='text-primary mb-2'> Quaid-e-Azam University . 2022-2026</p>
           <p  className='text-sm text-gray-600'>Graduated with honors and focused on web development and Software Engineering</p>
          </div>
          </div>
      </section>
    </div>
  )
}

export default About

