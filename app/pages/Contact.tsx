import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--sea-blue)]/10 via-white to-[var(--yellow-accent)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-[var(--sea-blue)]">Touch</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our programs? Want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of the following channels. Our team is ready to assist you 
                with information about our training programs, partnerships, or any other inquiries.
              </p>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={MapPin}
                  title="Address"
                  content="Sendafa Beke, Ethiopia"
                />
                <ContactInfoItem
                  icon={Phone}
                  title="Phone"
                  content="+1 (234) 567-8900"
                  link="tel:+12345678900"
                />
                <ContactInfoItem
                  icon={Mail}
                  title="Email"
                  content="info@cdtrc.org"
                  link="mailto:info@cdtrc.org"
                />
                <ContactInfoItem
                  icon={Clock}
                  title="Office Hours"
                  content="Monday - Friday: 9:00 AM - 5:00 PM"
                />
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <SocialLink icon={Facebook} href="#" />
                  <SocialLink icon={Twitter} href="#" />
                  <SocialLink icon={Instagram} href="#" />
                  <SocialLink icon={Linkedin} href="#" />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--sea-blue)] focus:ring-2 focus:ring-[var(--sea-blue)]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--sea-blue)] focus:ring-2 focus:ring-[var(--sea-blue)]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--sea-blue)] focus:ring-2 focus:ring-[var(--sea-blue)]/20 outline-none transition-all"
                      placeholder="Training Program Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--sea-blue)] focus:ring-2 focus:ring-[var(--sea-blue)]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[var(--sea-blue)] hover:bg-[var(--sea-blue-dark)] text-white rounded-xl font-semibold transition-all duration-300 glow-sea-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://maps.app.goo.gl/H9pRMBjVKhNywVyy6"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CDTRC Office Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoItem({ 
  icon: Icon, 
  title, 
  content, 
  link 
}: { 
  icon: any; 
  title: string; 
  content: string; 
  link?: string;
}) {
  const ContentWrapper = link ? 'a' : 'div';
  const linkProps = link ? { href: link } : {};

  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-[var(--sea-blue)] to-[var(--sea-blue-light)] rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <ContentWrapper 
          {...linkProps}
          className={`text-gray-600 ${link ? 'hover:text-[var(--sea-blue)] transition-colors' : ''}`}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[var(--sea-blue)]/10 flex items-center justify-center hover:bg-[var(--sea-blue)] hover:text-white text-[var(--sea-blue)] transition-all duration-300 hover:scale-110"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
