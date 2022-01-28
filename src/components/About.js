import React from 'react'

const About = () => {
	return (
		<section id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg: flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						{' '}
						Welcome to HimaLand
						<br className="hidden lg:inline-block" /> Dev Portfolio
					</h1>
					<p className="mb-8 leading-relaxed">
						Website developer and designer. Currently building websites web Apps using JAMstack and
						Fullstack tools. Developing from concept to production with a one man team.
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
							Contact for more Info
						</a>
						<a
							href="#projects"
							className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
							Current Projects on GitHub and Azure DevOps
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hima balde"
						src="/hima.jpg"
						height={220}
						width={220}
					/>
				</div>
			</div>
		</section>
	)
}

export default About
