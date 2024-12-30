const Section5 = () => {
    return (
        <section className="h-dvh w-dvw flex flex-col justify-center items-center bg-gradient-to-b from-[#000615] via-[#0747B5] to-[#000615] text-white">
            <h1 className="text-5xl font-bold animate-glow">CONTACT</h1>
            <div class="border-t-4 border-white my-4 w-52"></div>
            <div className="flex flex-row justify-evenly space-x-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/penpichaya-suttimark/" target="_blank" rel="noopener noreferrer" className="mt-3">
                    <img src="/LinkedIn.svg" alt="LinkedIn" />
                </a>

                {/* Email */}
                <a href="mailto:j.penpichaya@gmail.com">
                    <img src="/email.svg" alt="Email" />
                </a>

                {/* Phone */}
                <a href="tel:+66918053930" className="mt-3">
                    <img src="/phone.svg" alt="Phone" />
                </a>
            </div>
        </section>
    )
}

export default Section5