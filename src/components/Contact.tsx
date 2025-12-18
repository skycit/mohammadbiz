'use client';

import { useState } from 'react';
import { Mail, Copy, Check, Linkedin, Twitter, Calendar } from 'lucide-react';
import { contactContent } from '@/content/site';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(contactContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{contactContent.heading}</h2>
          <p className="text-gray-600 text-lg">{contactContent.subheading}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10">
          {/* Quick CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={contactContent.cta.primary.href}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-200/60"
            >
              <Calendar size={18} />
              {contactContent.cta.primary.label}
            </a>
            <a
              href={contactContent.cta.secondary.href}
              className="px-6 py-3 border border-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              {contactContent.cta.secondary.label}
            </a>
          </div>

          {/* Email with copy */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-gray-600 font-mono">{contactContent.email}</span>
            <button
              onClick={copyEmail}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="Copy email"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          </div>

          {/* Hint */}
          <p className="text-center text-sm text-gray-500 mb-8 bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
            💡 {contactContent.hint}
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Deck Request, Partnership Inquiry"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell me a bit about yourself and what you're interested in..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Send via email client
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-4">Or connect on social</p>
            <div className="flex justify-center gap-4">
              {contactContent.social.linkedin && (
                <a
                  href={contactContent.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {contactContent.social.twitter && (
                <a
                  href={contactContent.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-gray-600 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
                >
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
