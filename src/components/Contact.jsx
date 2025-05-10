import { useState, useEffect } from 'react';

function Contact({ onClose }) {
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
                Please feel free to reach out if you have any questions or would like to connect!
            </p>

            {/* Form */}
            <form className="space-y-3 sm:space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/* Subject */}
                <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-1" htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full border text-white border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Send
                </button>
            </form>
        </div>
    );
}
  
export default Contact;
  