import React, { useState, FormEvent } from 'react';
import { PersonalInfo } from '../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in a real app, you would send data to a backend
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Success case
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Error case
      setSubmitResult({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>{personalInfo.email}</p>
              </div>
            </div>
            {personalInfo.phone && (
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
            )}
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            <div className="social-links">
              {personalInfo.githubUrl && (
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {personalInfo.linkedinUrl && (
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {personalInfo.portfolioUrl && (
                <a href={personalInfo.portfolioUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe"></i>
                </a>
              )}
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitResult && (
                <div className={`submit-result ${submitResult.success ? 'success' : 'error'}`}>
                  {submitResult.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;