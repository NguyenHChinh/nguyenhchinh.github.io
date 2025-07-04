import { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function Contact({ onClose }) {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [captchaError, setCaptchaError] = useState(null);

    const [state, handleSubmit] = useForm("meogljpa", {
        data: {

        }
    });

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            setCaptchaError("reCAPTCHA not ready");
            return;
        }

        const token = await executeRecaptcha("contact_form");
        if (!token) {
            setCaptchaError("Failed to get reCAPTCHA token");
            return;
        }

        setCaptchaError(null);

        const form = e.target;
        const formData = new FormData(form);
        formData.append("g-recaptcha-response", token);

        await handleSubmit(formData);
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
            <h2 className="text-white text-xs sm:text-sm md:text-xl font-semibold mb-2">Get in touch!</h2>
            <p className="text-[10px] sm:text-sm text-gray-300 mb-4 sm:mb-6">
                I'm currently actively looking for full-time software engineering opportunities.
                Please feel free to reach out if you have any questions!
            </p>

            {/* Form */}
            <form onSubmit={onFormSubmit} method="POST" className="space-y-3 sm:space-y-4">
                {/* Hmm.. */}
                <div className='website-form'>
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="_gotcha"
                        autoComplete="off"
                        tabIndex="-1"/>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
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
                        required
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* reCAPTCHA */}
                {captchaError && <p className="text-red-400 text-xs">{captchaError}</p>}

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
  