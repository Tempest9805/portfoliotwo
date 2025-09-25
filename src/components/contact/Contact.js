import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSuccessMsg("");

    // Validations
    let valid = true;
    if (!clientName.trim()) {
      setErrClientName(true);
      valid = false;
    }
    if (!email.trim() || !emailValidation(email)) {
      setErrEmail(true);
      valid = false;
    }
    if (!messages.trim()) {
      setErrMessages(true);
      valid = false;
    }
    if (!valid) return;

    // Send
    setLoading(true);
    try {
      const payload = {
        name: clientName,
        email: email,
        message: messages,
      };
    
      await axios.post("https://getform.io/f/bqoeywpb", payload, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccessMsg(
        `Hello ${clientName}, your message has been sent successfully. Thank you for your time!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    } catch (err) {
      console.error("Send error:", err);
      setSubmitError("There was an error sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-[#ccc] text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Alajuela, Costa Rica
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-[#ccc] text-sm  font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +506 83656462
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-sm text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-[#ccc] text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            danielchavesvargas98@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-[#ccc] text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>

      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />

        {successMsg ? (
          <p className="text-center text-base font-titleFont p-8 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="p-6 flex flex-col gap-6"
            noValidate
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <div className="w-full">
                <input
                  name="name"
                  onChange={handleName}
                  value={clientName}
                  className={`${
                    errClientName
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                  type="text"
                  placeholder="Full Name"
                  aria-invalid={errClientName}
                  aria-label="Full name"
                />
                {errClientName && <p className="text-sm text-red-500 mt-1">Please enter your name.</p>}
              </div>

              <div className="w-full">
                <input
                  name="email"
                  onChange={handleEmail}
                  value={email}
                  className={`${
                    errEmail
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                  type="email"
                  placeholder="Email Address"
                  aria-invalid={errEmail}
                  aria-label="Email address"
                />
                {errEmail && <p className="text-sm text-red-500 mt-1">Enter a valid email.</p>}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                onChange={handleMessages}
                value={messages}
                className={`${
                  errMessages
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
                placeholder="Your Message"
                rows="4"
                aria-invalid={errMessages}
                aria-label="Your message"
              />
              {errMessages && <p className="text-sm text-red-500 mt-1">Please enter a message.</p>}
            </div>

            {submitError && <p className="text-sm text-red-500">{submitError}</p>}

            <button
              type="submit"
              disabled={loading}
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
              aria-busy={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
