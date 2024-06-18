"use client";
import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

const ContactUs = ({ isTransparent, title }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
        },
      });
    } else {
      animation.start({
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [inView]);


  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
          name: name,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        // Handle success (e.g., show a success message)
        console.log(result.message);
      } else {
        // Handle error (e.g., show an error message)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      toast.success('Email Sent Successfully');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div
      id="kontakt"
      ref={ref}
      className={`w-full mx-auto flex justify-between items-center flex-col gap-16 ${isTransparent ? 'bg-transparent' : 'bg-black px-6 py-12 lg:py-24 lg:px-0 xsm:px-12'}`}
    >
      <motion.div animate={animation} className="text-white w-full max-w-[1000px]">
        <h1 className="font-extrabold text-base xsm:text-[1.5rem] mb-6 leading-normal">
          {
            title ?
              <span dangerouslySetInnerHTML={{ __html: title }} />
              :
              <span>
                Masz pomysł na kreatywną kampanię <br className={`${!isTransparent && 'hidden'}`} />
                lub szukasz inspiracji? <br className={`${!isTransparent && 'hidden'}`} />
                Połączmy siły i stwórzmy coś wyjątkowego!
              </span>
          }
        </h1>
        <form onSubmit={handleButtonClick}>
          <div className="flex items-center gap-8 lg:flex-row xsm:flex-row flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-[13px] xsm:text-base px-2 py-3 bg-transparent border-b border-gray-1 text-white outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Imię i Nazwisko"
              className="w-full px-2 py-3 text-[13px] xsm:text-base bg-transparent border-b border-gray-1 text-white outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <textarea
              name="Wiadomość"
              id="message"
              cols="30"
              placeholder="Wiadomość"
              className={`w-full mt-8 text-[13px] xsm:text-base p-2 bg-transparent border border-gray-1 text-white outline-none ${isTransparent ? 'h-auto' : 'h-[200px]'}`}
              // required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div class="flex items-center my-8">
            <input id="link-checkbox" type="checkbox" required value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-1-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-1-600" />
            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Zapoznałem(am) się z
              <a href="/polityka_prywatnosci.pdf" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline mx-1">
                polityką prywatności</a>
              i akceptuję jej treść.
            </label>
          </div>

          <div>
            <button type='submit' disabled={isLoading} className="uppercase xsm:py-4 px-4 py-2 xsm:px-8 bg-white text-black font-bold hover:bg-brand hover:text-white transition-colors duration-300">
              Wyślij
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
