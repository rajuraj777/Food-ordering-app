import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mnqeedzz");
  if (state.succeeded) {
    return (
      <div className="tw-bg-white tw-dark:tw-bg-gray-900 tw-p-10 tw-rounded-xl tw-shadow-2xl tw-mx-auto tw-max-w-6xl tw-mt-16 tw-text-center">
        <h1 className="tw-text-5xl tw-font-extrabold tw-mb-8 tw-text-center tw-text-gray-800 tw-dark:tw-text-gray-200">Contact Us</h1>
        <p className="tw-text-lg tw-text-gray-700 tw-dark:tw-text-gray-300 tw-mb-6 tw-leading-relaxed">
          Thanks for reaching out! We'll get back to you soon.
        </p>
      </div>
    );
  }
  return (
    <div className="tw-bg-white tw-dark:tw-bg-gray-900 tw-p-10 tw-rounded-xl tw-shadow-2xl tw-mx-auto tw-max-w-6xl tw-mt-20 tw-mb-48">
      <h1 className="tw-text-5xl tw-font-extrabold tw-mb-8 tw-text-center tw-text-gray-800 tw-dark:tw-text-gray-200">Contact Us</h1>
      <p className="tw-text-lg tw-text-gray-700 tw-dark:tw-text-gray-300 tw-mb-6 tw-leading-relaxed">
        We'd love to hear from you! Whether you have a question about our services, feedback on our platform, or any other inquiries, feel free to reach out.
      </p>
      <form onSubmit={handleSubmit} className="tw-space-y-6">
        <div>
          <label htmlFor="email" className="tw-block tw-text-lg tw-font-medium tw-text-gray-800 tw-dark:tw-text-gray-200">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="tw-mt-1 tw-block tw-w-full tw-px-4 tw-py-2 tw-bg-gray-100 tw-dark:tw-bg-gray-800 tw-border tw-border-gray-300 tw-dark:tw-border-gray-700 tw-rounded-md tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-yellow-500"
            placeholder="Your Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="message" className="tw-block tw-text-lg tw-font-medium tw-text-gray-800 tw-dark:tw-text-gray-200">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="tw-mt-1 tw-block tw-w-full tw-px-4 tw-py-2 tw-bg-gray-100 tw-dark:tw-bg-gray-800 tw-border tw-border-gray-300 tw-dark:tw-border-gray-700 tw-rounded-md tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-yellow-500"
            placeholder="Your Message"
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="tw-flex tw-justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="tw-px-6 tw-py-2 tw-bg-yellow-500 tw-text-white tw-font-semibold tw-rounded-md tw-shadow-md hover:tw-bg-yellow-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2     focus:tw-ring-yellow-500 tw-min-w-60 tw-border-none " 
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
