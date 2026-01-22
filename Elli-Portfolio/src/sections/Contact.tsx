import React, { useState } from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import Button from '@/components/Button';
import { ContactForm } from '@/types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // TODO: Replace with actual social media URLs
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/elli-shituna', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/elli-shituna', icon: Github },
    { name: 'Twitter', url: 'https://twitter.com/elli-shituna', icon: Twitter },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual form submission logic
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = formData.name && formData.email && formData.message && isValidEmail(formData.email);

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Contact
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact CTA */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Let's build something together!
            </h3>
            <p className="text-lg text-gray-600">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-indigo focus:border-transparent transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-indigo focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-indigo focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full mt-8"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </form>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-indigo border-2 border-gray-200 hover:border-primary-indigo hover:bg-primary-indigo hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
