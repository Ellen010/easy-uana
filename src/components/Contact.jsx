import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx'
import Button from '../components/Button';
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "../utils/animations.js";

gsap.registerPlugin(useGSAP);

const Contact = () => {

    useGSAP(() => {

        animateWithGsap('#slide', {
            y: 0,
            opacity: 1,
            duration: 1
        });

        animateWithGsap(
            '.animate-grow',
            {
                scale: 1,
                opacity: 1,
                ease: 'back.in',
                duration: 1.5
            }
        );

        animateWithGsap(
            '.animate-fade-in',
            {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                duration: 2
            }
        );

    }, []);

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
        <section id="contact" className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-xl px-6">

                <h1 className="text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950 mb-10">
                    Contact
                </h1>

                <p className="text-center mb-6"> Contact us for more information </p>

                {alert.show && <Alert {...alert} />}

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col space-y-6"
                >
                    <label className="flex flex-col text-start space-y-6">
                        <span>Your name</span>
                        <div className="p-[2px] rounded-3xl bg-gradient-to-b from-[#00c950] via-[#386641] to-[#228B22]">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 rounded-sm bg-black text-start outline-none"
                                placeholder="ex., John Doe"
                            />
                        </div>
                    </label>

                    <label className="flex flex-col space-y-6 text-start">
                        <span>Your email</span>
                        <div className="p-[2px] rounded-3xl bg-gradient-to-b from-[#00c950] via-[#386641] to-[#228B22]">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 rounded-sm bg-black text-start outline-none"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </div>
                    </label>

                    <label className="flex flex-col space-y-6 text-start">
                        <span>Your message</span>
                        <div className="p-[2px] rounded-3xl bg-gradient-to-b from-[#00c950] via-[#386641] to-[#228B22]">
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-5 py-3 rounded-sm bg-black text-start outline-none"
                                placeholder="Share your thoughts..."
                            />
                        </div>
                        <Button type="submit" title="Contact" loading={loading} />
                    </label>

                </form>

            </div>
        </section>
    )
}
export default Contact