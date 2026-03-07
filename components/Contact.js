'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// ⚠️ Get your free access key at https://web3forms.com (enter your email → get key instantly)
const WEB3FORMS_ACCESS_KEY = 'e2404a01-ecf2-420f-804d-276e64e12a53';

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
          from_name: 'Portfolio Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending': return '⏳ Sending...';
      case 'success': return '✓ Message Sent!';
      case 'error': return '⚠️ Try Again';
      default: return '🚀 Send Message';
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? Reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-on-scroll delay-1">
            <div className="glass-card contact-card">
              <span className="contact-card-icon">📧</span>
              <h4>Email</h4>
              <a href="mailto:wgaurav801@gmail.com">wgaurav801@gmail.com</a>
            </div>
            <div className="glass-card contact-card">
              <span className="contact-card-icon">📱</span>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/918849731117" target="_blank" rel="noopener noreferrer">
                +91 88497 31117
              </a>
            </div>
            <div className="glass-card contact-card">
              <span className="contact-card-icon">💼</span>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/wagh-gaurav/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/wagh-gaurav
              </a>
            </div>
            <div className="glass-card contact-card">
              <span className="contact-card-icon">⌨️</span>
              <h4>GitHub</h4>
              <a href="https://github.com/wgaurav801" target="_blank" rel="noopener noreferrer">
                github.com/wgaurav801
              </a>
            </div>
            <a href="#" className="btn btn-secondary download-resume-btn">
              📄 Download Resume
            </a>
          </div>

          <form className="contact-form glass-card animate-on-scroll delay-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="form-status success">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                ❌ {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className={`btn btn-primary submit-btn${status === 'success' ? ' btn-success' : ''}`}
              disabled={status === 'sending'}
            >
              {getButtonContent()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
