import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaYoutube } from 'react-icons/fa'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl text-bold text-center mb-4'>
                    Get In
                    <span className='text-cyan-400 ml-1.5'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto' >
                    {/* Contact Form  */}
                    <div>
                        <ContactForm/>
                    </div>
                    {/* Contact Information  */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-cyan-400 text-2xl mr-4'>
                                <FaMapMarkerAlt/>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Lakhimpur Kheri, Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text-cyan-400 text-2xl mr-4'>
                                <FaEnvelope/>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>sharadjais80@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text-cyan-400 text-2xl mr-4'>
                                <FaPhone/>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 8052933682</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/DeveloperSharad2004" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-cyan-400 hover:bg-cyan-700 hover:border border-white hover:text-white duration-300 cursor-pointer'>
                                    <FaGithub/>
                                </a>
                                <a href="https://www.linkedin.com/in/sharad-jaiswal-02200a280/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-cyan-400 hover:bg-cyan-700 hover:border border-white hover:text-white duration-300 cursor-pointer'>
                                    <FaLinkedin/>
                                </a>
                                <a href="https://www.youtube.com/@Webtech09" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-cyan-400 hover:bg-cyan-700 hover:border border-white hover:text-white duration-300 cursor-pointer'>
                                    <FaYoutube/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
