import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Coffee, Target, Zap, Heart, Users } from 'lucide-react';
import content from '../data/content.json';

const Home = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			{/* Hero Section */}
			<motion.section
				initial='hidden'
				animate='visible'
				variants={containerVariants}
				className='text-center mb-16'
			>
				<motion.div variants={itemVariants} className='mb-8'>
					<img
						src='https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
						alt='Professional workspace'
						className='w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg'
					/>
					<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>
						Hi, I'm{' '}
						<span className='text-blue-600'>{content.personal.name}</span>
					</h1>
					<h2 className='text-xl md:text-2xl text-gray-600 mb-4'>
						{content.personal.title}
					</h2>
					<p className='text-lg text-gray-700 max-w-3xl mx-auto'>
						{content.personal.tagline}
					</p>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className='flex justify-center items-center space-x-2 text-gray-600 mb-8'
				>
					<MapPin className='h-5 w-5' />
					<span>{content.personal.location}</span>
				</motion.div>
			</motion.section>

			{/* About Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={containerVariants}
				className='mb-16'
			>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<motion.div variants={itemVariants}>
						<img
							src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
							alt='Quality assurance testing'
							className='rounded-2xl shadow-xl'
						/>
					</motion.div>
					<motion.div variants={itemVariants} className='space-y-6'>
						<h2 className='text-3xl font-bold text-gray-900'>About Me</h2>
						<p className='text-gray-700 leading-relaxed'>
							{content.about.intro}
						</p>
						<p className='text-gray-700 leading-relaxed'>
							{content.about.personality}
						</p>
					</motion.div>
				</div>
			</motion.section>

			{/* Fun Facts */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={containerVariants}
				className='mb-16'
			>
				<motion.h2
					variants={itemVariants}
					className='text-3xl font-bold text-center text-gray-900 mb-12'
				>
					Fun Facts & Achievements
				</motion.h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{content.about.funFacts.map((fact, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ scale: 1.05 }}
							className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow'
						>
							<p className='text-gray-700 text-center'>{fact}</p>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Values */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={containerVariants}
				className='mb-16'
			>
				<div className='bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white'>
					<motion.h2
						variants={itemVariants}
						className='text-3xl font-bold text-center mb-8'
					>
						My Core Values
					</motion.h2>
					<div className='grid md:grid-cols-2 gap-6'>
						{content.about.values.map((value, index) => {
							const icons = [Target, Zap, Heart, Users];
							const IconComponent = icons[index % icons.length];
							return (
								<motion.div
									key={index}
									variants={itemVariants}
									className='flex items-start space-x-4'
								>
									<IconComponent className='h-6 w-6 mt-1 flex-shrink-0 text-blue-200' />
									<p className='text-blue-50 leading-relaxed'>{value}</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={containerVariants}
				className='text-center'
			>
				<motion.div
					variants={itemVariants}
					className='bg-white rounded-2xl p-8 shadow-xl'
				>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>
						Ready to Build Something Amazing?
					</h2>
					<p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
						Let's collaborate to create software that not only works perfectly
						but delights users at every interaction.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<motion.a
							href='/resume'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold'
						>
							View My Resume
						</motion.a>
						<motion.a
							href='/contact'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold'
						>
							Get In Touch
						</motion.a>
					</div>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Home;
