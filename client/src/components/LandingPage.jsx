import "animate.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {AiOutlineCloud, AiOutlineLock} from 'react-icons/ai'
import {GrNotes} from 'react-icons/gr'

const LandingPage = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className="bg-white">
      <header className="bg-black text-white text-center py-10 bg-custom">
        <div className="container mx-auto px-4 flex justify-between items-center py-0">
          <a href="#" className="text-2xl font-bold">
            NoteX
          </a>
          <div>
            <a href="#features" className="px-4 hover:underline">
              Features
            </a>
            <a href="#pricing" className="px-4 hover:underline">
              Pricing
            </a>
            <a href="#contact" className="px-4 hover:underline">
              Contact
            </a>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          Welcome to NoteX
        </h1>
        <p className="text-xl mb-8">Your ultimate note-taking solution</p>
        <Link
          to="auth"
          href="#get-started"
          className="bg-white px-8 py-2 rounded-full 
           text-lg hover:bg-gray-300 transition duration-300
           bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500
           hover:from-indigo-600 hover:via-pink-600
           hover:to-red-600 focus:outline-none text-white uppercase font-bold shadow-md mx-auto p-5
          "
        >
          Get Started
        </Link>
      </header>

      <section
        id="features"
        className="py-16 animate__animated animate__fadeIn"
      >
        <h2 className="text-3xl font-bold text-center mb-8 mr-2 opacity-50">
          Features
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="text-6xl mb-4 flex justify-center items-center"><GrNotes /></div>
            <h3 className="text-xl font-bold mb-2">Easy Note Taking</h3>
            <p className="text-gray-700">
              Create and organize notes with ease. Our intuitive interface makes
              note-taking a breeze.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="text-6xl mb-4 flex justify-center items-center"><AiOutlineLock /></div>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-700">
              Your notes are encrypted and stored securely. Only you have access
              to your personal information.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="text-6xl mb-4 flex justify-center items-center"><AiOutlineCloud /></div>
            <h3 className="text-xl font-bold mb-2">Cloud Sync</h3>
            <p className="text-gray-700">
              Access your notes across different devices. Your notes are always
              with you, wherever you go.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-gray-200 py-16 animate__animated animate__fadeIn"
      >
        <h2 className="text-3xl font-bold text-center mb-8 mr-2 opacity-50">
          Pricing
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold mb-2 mr-2 opacity-50">Basic</h3>
            <p className="text-4xl font-bold mb-4 mr-2 opacity-50">Free</p>
            <ul className="text-gray-700 mb-4">
              <li>100 Notes</li>
              <li>1 GB Storage</li> 
              <li>Email Support</li>
            </ul>
            <a
              href="#signup"
              className="bg-white px-8 py-2 rounded-full 
           text-lg hover:bg-gray-300 transition duration-300
           bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500
           hover:from-indigo-600 hover:via-pink-600
           hover:to-red-600 focus:outline-none text-white uppercase font-bold shadow-md mx-auto p-5
          "
            >
              Sign Up
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold mb-2 mr-2 opacity-50">Pro</h3>
            <p className="text-4xl font-bold mb-4 mr-2 opacity-50">$9.99/mo</p>
            <ul className="text-gray-700 mb-4">
              <li>Unlimited Notes</li>
              <li>10 GB Storage</li>
              <li>Priority Support</li>
            </ul>
            <a
              href="#signup"
              className="bg-white px-8 py-2 rounded-full 
           text-lg hover:bg-gray-300 transition duration-300
           bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500
           hover:from-indigo-600 hover:via-pink-600
           hover:to-red-600 focus:outline-none text-white uppercase font-bold shadow-md mx-auto p-5
          "
            >
              Sign Up
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold mb-2 mr-2 opacity-50">Enterprise</h3>
            <p className="text-4xl font-bold mb-4 mr-2 opacity-50">Contact Us</p>
            <ul className="text-gray-700 mb-4">
              <li>Custom Solutions</li>
              <li>Dedicated Support</li>
              <li>API Access</li>
            </ul>
            <a
              href="#contact"
              className="bg-white px-8 py-2 rounded-full 
              text-lg hover:bg-gray-300 transition duration-300
              bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500
              hover:from-indigo-600 hover:via-pink-600
              hover:to-red-600 focus:outline-none text-white uppercase font-bold shadow-md mx-auto p-5
             "
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl text-center mb-8 mr-2 font-bold opacity-50">
          Contact Us
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 mr-2 opacity-50">Get in Touch</h3>
            <p className="text-gray-700 mb-4 mr-2 font-bold opacity-50">
              Have questions? Feel free to reach out to us. We're here to help!
            </p>
            <address className="mr-2 font-bold opacity-50">
                <p>Email: daorsahyseni@gmail.com</p>
            </address>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form action="/submit" method="post">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-600 text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white px-8 py-2 rounded-full 
           text-lg hover:bg-gray-300 transition duration-300
           bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500
           hover:from-indigo-600 hover:via-pink-600
           hover:to-red-600 focus:outline-none text-white uppercase font-bold shadow-md mx-auto p-5
          "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-black text-center py-4">
        <p>&copy; 2023 NoteX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
