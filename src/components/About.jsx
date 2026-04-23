import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const overviewCards = [
    {
        title: 'Who it concerns',
        copy: 'Since January 1, 2026, non-European applicants making a first request for a multi-year residence permit or a resident card must show they passed the civic exam. Renewals of those permits do not require the exam.',
        tone: 'bg-white/74',
    },
    {
        title: 'What the exam checks',
        copy: 'The exam evaluates knowledge of the principles and values of the Republic, how French institutions work, and how life in French society is organized.',
        tone: 'bg-[#fff3ea]/82',
    },
    {
        title: 'How the exam works',
        copy: 'It is a 40-question multiple-choice exam in French, lasts 45 minutes, and includes 28 knowledge questions plus 12 situational questions. A passing result requires at least 32 correct answers.',
        tone: 'bg-white/74',
    },
];

const themes = [
    {
        label: 'Principles and values of the French Republic',
        tone: 'bg-[#F6DFD5] text-[#552611]',
        stairClass: '',
    },
    {
        label: 'Institutional and political system',
        tone: 'bg-[#E59E80] text-[#552611]',
        stairClass: 'md:ml-[15rem]',
    },
    {
        label: 'Rights and duties',
        tone: 'bg-[#DC7E56] text-white',
        stairClass: 'md:ml-[24rem]',
    },
    {
        label: 'History, geography, and culture',
        tone: 'bg-[#D45E2B] text-white',
        stairClass: 'md:ml-[33rem]',
    },
    {
        label: 'Living in French society',
        tone: 'bg-[#A94B23] text-white',
        stairClass: 'md:ml-auto md:translate-x-6',
    },
];

const About = () => {
    const prefersReducedMotion = useReducedMotion();

    const macaTwoDesktopAnimation = prefersReducedMotion
        ? {
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              opacity: 1,
          }
        : {
              x: [0, 0, -34, -108, -108, -150, -240, -240, -286, -392, -392, -442, -570, -570, -570, -570, 0],
              y: [0, 0, 34, 82, 82, 118, 158, 158, 202, 244, 244, 290, 346, 346, 346, 346, 0],
              rotate: 0,
              scale: 1,
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          };

    const macaTwoMobileAnimation = prefersReducedMotion
        ? {
              y: 0,
              rotate: 0,
          }
        : {
              y: [0, -10, 0],
              rotate: [-2, 3, -2],
          };

    return (
        <main className="px-4 pb-16 pt-8 md:px-6">
            <section className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2.4rem] border border-white/35 bg-[#fff8e7]/78 p-8 shadow-[0_28px_70px_rgba(85,38,17,0.16)] backdrop-blur md:p-10">
                    <motion.img
                        src="/macaron-one.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute right-[-3.75rem] top-10 hidden w-[9rem] select-none opacity-85 drop-shadow-[0_16px_28px_rgba(85,38,17,0.16)] lg:block"
                        animate={{ y: [0, -18, 0], rotate: [6, 12, 6] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.img
                        src="/macaron-two.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-36 left-[-3rem] hidden w-[8.25rem] select-none opacity-85 drop-shadow-[0_16px_28px_rgba(85,38,17,0.16)] lg:block"
                        animate={{ y: [0, 16, 0], rotate: [-8, -14, -8] }}
                        transition={{
                            duration: 9,
                            delay: 0.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.img
                        src="/macaron-three.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute right-[-3rem] top-[33rem] hidden w-[7.75rem] select-none opacity-80 drop-shadow-[0_16px_28px_rgba(85,38,17,0.14)] xl:block"
                        animate={{ y: [0, -12, 0], rotate: [4, 10, 4] }}
                        transition={{
                            duration: 7.2,
                            delay: 0.3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.img
                        src="/macaron-four.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-12 right-[-2.5rem] hidden w-[7.5rem] select-none opacity-80 drop-shadow-[0_16px_28px_rgba(85,38,17,0.14)] xl:block"
                        animate={{ y: [0, 14, 0], rotate: [-5, -11, -5] }}
                        transition={{
                            duration: 8.6,
                            delay: 0.9,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.img
                        src="/macaron-five.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute right-[-1.75rem] top-[40.5rem] hidden w-[10rem] select-none opacity-75 drop-shadow-[0_18px_30px_rgba(85,38,17,0.16)] xl:block"
                        animate={{
                            x: [0, 20, -8, 0],
                            y: [0, -16, 12, 0],
                            rotate: [-8, 5, -4, -8],
                        }}
                        transition={{
                            duration: 10.5,
                            delay: 0.4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    <p className="relative z-10 frijole mb-3 text-sm uppercase tracking-[0.18em] text-[#A94B23]">
                        About the civic test
                    </p>
                    <h1 className="relative z-10 chango mb-4 max-w-[18ch] text-[clamp(2.2rem,4.5vw,3.8rem)] leading-tight text-[#7F381A]">
                        Understand the Test Civique before you apply for your titre de séjour
                    </h1>
                    <p className="relative z-10 max-w-3xl text-base leading-8 text-[#552611] md:text-lg">
                        The French civic exam is an official step for certain residence permit
                        applications. It must be passed before filing the application, because the
                        certificate of success is required when the residence permit request is
                        submitted.
                    </p>

                    <div className="relative z-10 mt-8 grid gap-5 lg:grid-cols-3">
                        {overviewCards.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[2rem] border border-white/40 p-6 shadow-[0_18px_40px_rgba(85,38,17,0.1)] ${card.tone}`}
                            >
                                <h2 className="chango text-[1.35rem] leading-tight text-[#7F381A]">
                                    {card.title}
                                </h2>
                                <p className="mt-4 text-sm leading-7 text-[#552611] md:text-base">
                                    {card.copy}
                                </p>
                            </article>
                        ))}
                    </div>

                    <section className="relative z-10 mt-8 rounded-[2rem] border border-white/40 bg-white/72 p-7 shadow-[0_18px_40px_rgba(85,38,17,0.1)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#A94B23]">
                            Main themes
                        </p>
                        <p className="mt-3 max-w-3xl text-base leading-8 text-[#552611]">
                            The official exam content is organized around five civic themes. These
                            are the core subjects applicants are expected to understand.
                        </p>
                        <div className="mt-8 rounded-[2rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,244,236,0.9),rgba(255,232,242,0.72))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_18px_40px_rgba(85,38,17,0.08)] md:p-8">
                            <div className="relative overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,247,241,0.4))] px-3 py-6 md:min-h-[34rem] md:px-6 md:py-8">
                                <motion.img
                                    src="/maca-two.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none mx-auto mb-4 block w-[7.75rem] select-none drop-shadow-[0_18px_24px_rgba(85,38,17,0.2)] md:hidden"
                                    animate={macaTwoMobileAnimation}
                                    transition={{
                                        duration: 6.8,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        transformOrigin: '50% 50%',
                                    }}
                                />
                                <motion.img
                                    src="/maca-two.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none absolute left-[36.5rem] top-0 hidden w-[9.5rem] select-none drop-shadow-[0_18px_24px_rgba(85,38,17,0.2)] md:block"
                                    animate={macaTwoDesktopAnimation}
                                    transition={{
                                        duration: 31,
                                        repeat: Infinity,
                                        repeatDelay: 0,
                                        times: prefersReducedMotion
                                            ? undefined
                                            : [0, 0.16, 0.173, 0.2, 0.36, 0.373, 0.4, 0.56, 0.573, 0.6, 0.76, 0.773, 0.8, 0.96, 0.985, 0.992, 1],
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        transformOrigin: '50% 50%',
                                        zIndex: 0,
                                    }}
                                />
                                <div className="relative z-10 flex flex-col gap-6 md:flex-col-reverse md:pt-24">
                                    {themes.map((theme, index) => (
                                        <div
                                            key={theme.label}
                                            className={`relative flex min-h-[5.75rem] items-center rounded-[1.9rem] border border-white/65 px-5 py-4 text-sm leading-6 shadow-[0_18px_28px_rgba(85,38,17,0.12)] md:min-h-[6.5rem] md:w-[24rem] md:px-7 md:text-base ${theme.tone} ${theme.stairClass}`}
                                        >
                                            <div className="absolute inset-x-5 top-0 h-3 rounded-b-[1rem] bg-white/16 blur-md" />
                                            <span className="chango mr-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/78 text-[0.95rem] text-[#7F381A] shadow-[0_6px_14px_rgba(85,38,17,0.1)]">
                                                0{index + 1}
                                            </span>
                                            <span className="max-w-[24ch] font-semibold">
                                                {theme.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <section className="rounded-[2rem] border border-white/40 bg-[#7F381A] p-7 text-white shadow-[0_18px_40px_rgba(85,38,17,0.14)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/78">
                                Preparation and registration
                            </p>
                            <p className="mt-4 text-base leading-8 text-white/90">
                                Applicants can take the exam at any time and as many times as
                                needed. The certificate of success has no expiry date.
                            </p>
                            <p className="mt-4 text-base leading-8 text-white/90">
                                The Ministry also points applicants to the official civic training
                                platform for the exam program, study sheets, official knowledge
                                questions, registration details, and approved exam centers.
                            </p>
                            <a
                                href="https://formation-civique.interieur.gouv.fr"
                                target="_blank"
                                rel="noreferrer"
                                className="chango mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm text-[#7F381A] shadow-[0_12px_26px_rgba(32,16,9,0.18)] transition hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none"
                            >
                                Visit the official training site
                            </a>
                        </section>
                    </div>

                    <section className="relative z-10 mt-8 rounded-[2rem] border border-white/40 bg-[#fff3ea]/82 p-7 shadow-[0_18px_40px_rgba(85,38,17,0.1)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#A94B23]">
                            Exceptions and support
                        </p>
                        <p className="mt-4 max-w-4xl text-base leading-8 text-[#552611]">
                            According to the official ministry page, some applicants are not covered
                            by the exam requirement, including beneficiaries of international
                            protection and some third-country nationals covered by specific bilateral
                            agreements. The ministry also states that accommodations or exemptions may
                            be available for parts of the evaluation when a disability or health
                            condition requires it, with a supporting medical certificate.
                        </p>
                    </section>

                    <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                        <Link
                            to="/practice"
                            className="chango inline-flex items-center justify-center rounded-full bg-[#552611] px-6 py-4 text-sm text-white shadow-[0_12px_28px_rgba(85,38,17,0.14)] transition hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none"
                        >
                            Start training
                        </Link>
                        <Link
                            to="/"
                            className="chango inline-flex items-center justify-center rounded-full border-2 border-[#552611] bg-white/70 px-6 py-4 text-sm text-[#552611] shadow-[0_12px_28px_rgba(85,38,17,0.08)] transition hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none"
                        >
                            Back to home
                        </Link>
                    </div>

                    <p className="relative z-10 mt-8 text-xs leading-6 text-[#7F381A]/78">
                        Source: official French Ministry of the Interior page on the civic exam for
                        residence permit applications,
                        {' '}
                        <a
                            href="https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour"
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-[#7F381A]/45 underline-offset-2"
                        >
                            immigration.interieur.gouv.fr
                        </a>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;
