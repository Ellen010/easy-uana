import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx'
/*
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../constants/animations.js';
*/

const Contact = () => {
  /*  useGSAP(() => {
        gsap.from('#contact', {
            scrollTrigger: {
                trigger: '#contact',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, []);*/

    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Your message has been sent successfully. We will reply as soon as possible.',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [6000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "Error occurred and the message hasn't been sent",
                        type: 'danger',
                    });
                },
            );
    };

    return (
        <section id="contact" className="my-30">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950">
                    Contact
                </h1>
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full text-xl ms-5 ml-30 text-justify lg:text-left leading-relaxed">
                        <p className="mini-title g_fadeIn">Contact us for more information </p>
                        <div className="contact-container g_fadeIn">
                            {alert.show && <Alert {...alert} />}
                            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                                <label className="space-y-3">
                                    <span className="field-label">Your name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="field-input"
                                        placeholder="ex., John Doe"
                                    />
                                </label>

                                <label className="space-y-3">
                                    <span className="field-label">Your email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="field-input"
                                        placeholder="ex., johndoe@gmail.com"
                                    />
                                </label>

                                <label className="space-y-3">
                                    <span className="field-label">Your message</span>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="field-input"
                                        placeholder="Share your thougths or questionts here..."
                                    />
                                </label>

                                <button type="submit" className="px-10 py-5 rounded-3xl bg-green-500 m-5 hover:bg-green-200 backdrop-blur hover:scale-110 flex-center text-white text-2xl" disabled={loading}>
                                    {loading ? "Sending email..." : "Contact"}
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact