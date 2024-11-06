import React, { useState } from 'react';
import { Mail, Linkedin, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Profile and Info */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-4">
                Let's Connect
              </h1>
              <p className="text-lg text-gray-300">
                I'm always interested in discussing new opportunities, 
                collaborations, or just having a conversation about technology and innovation.
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={`${import.meta.env.VITE_SITE_URL}/images/Johns profile pic.png`}
                  alt="John Bennette"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                Direct Contact
              </h2>
              <div className="space-y-4">
                <a 
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>{import.meta.env.VITE_CONTACT_EMAIL}</span>
                </a>
                <a 
                  href={import.meta.env.VITE_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 
                           text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 
                           text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 
                           text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 
                           text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 
                         text-white font-medium rounded-lg 
                         transition-colors duration-200 
                         flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>There was an error sending your message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;