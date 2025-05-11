import { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact({ onClose }) {
    const [state, handleSubmit] = useForm("meogljpa");
    const recaptchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const SITE_KEY = "6LcMXTUrAAAAAC2XTyDQRC45H-WsvPYWA1cnskJL";

    const onCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    if (state.succeeded) {
        return (
            <div className="flex items-center text-left p-6 bg-gray-800 rounded-r-xl h-full w-full text-white">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-xs sm:text-sm md:text-base font-medium text-gray-300 hover:text-red-400 border border-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                    Close
                </button>
                
                {/* Message Content */}
                <div className='flex flex-col'>
                    <h2 className="text-xl font-semibold mb-2 w-full">Message sent!</h2>
                    <p className="text-sm text-gray-300 w-full">Thanks for reaching out! I'll get back to you as soon as possible.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="text-left p-6 bg-gray-800 rounded-r-xl h-full w-full">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-xs sm:text-sm md:text-base font-medium text-gray-300 hover:text-red-400 border border-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                Close
            </button>

            {/* Header */}
            <h2 className="text-white text-xs sm-text:sm md:text-xl font-semibold mb-2">Get in touch!</h2>
            <p className="text-[10px] sm:text-sm text-gray-300 mb-4 sm:mb-6">
                I'm currently actively looking for full-time software engineering opportunities. 
                Please feel free to reach out if you have any questions!
            </p>

            {/* Form */}
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!captchaToken) {
                    alert("Please complete the CAPTCHA");
                    return;
                }
                handleSubmit(e);
            }} className="space-y-3 sm:space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* CAPTCHA */}
                <div className='scale-45 sm:scale-65 md:scale-80 lg:scale-80 origin-left'>
                    <ReCAPTCHA
                        sitekey={SITE_KEY}
                        onChange={onCaptchaChange}
                        ref={recaptchaRef}
                    />
                </div>

                {/* Send Button */}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 hover:cursor-pointer transition-colors">
                    {state.submitting ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
}
  
export default Contact;
  