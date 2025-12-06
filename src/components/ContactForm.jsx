import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_mi1vie7",     // <-- Your Service ID
            "template_0fzk1ge",    // <-- Your Template ID
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message
            },
            "69gszRUbohdUl59i_"    // <-- Your Public Key
        )
            .then(() => {
                alert("Message Sent Successfully!");
                setForm({ name: "", email: "", message: "" });
            })
            // .catch((error) => {
            //     alert("Failed to send message");
            //     console.error(error);
            // });
            .catch((error) => {
                console.log("EmailJS Error:", error);
                alert("Failed to send message");
            });
    };


    return (
        <form className='space-y-6' onSubmit={sendEmail}>

            {/* Name */}
            <div>
                <label className='block text-gray-300 mb-2'>Your Name</label>
                <input
                    type="text"
                    name="name"              // <-- IMPORTANT
                    value={form.name}
                    onChange={handleChange} // <-- IMPORTANT
                    required
                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                />
            </div>

            {/* Email */}
            <div>
                <label className='block text-gray-300 mb-2'>Email Address</label>
                <input
                    type="email"
                    name="email"             // <-- IMPORTANT
                    value={form.email}
                    onChange={handleChange}  // <-- IMPORTANT
                    required
                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                />
            </div>

            {/* Message */}
            <div>
                <label className='block text-gray-300 mb-2'>Your Message</label>
                <textarea
                    name="message"           // <-- IMPORTANT
                    value={form.message}
                    onChange={handleChange}  // <-- IMPORTANT
                    required
                    className='w-full bg-dark-300 h-40 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type='submit'
                className='w-full px-6 py-3 bg-cyan-400 rounded-lg font-medium hover:bg-cyan-700 transition duration-300 cursor-pointer'
            >
                Send
            </button>

        </form>
    );
}
