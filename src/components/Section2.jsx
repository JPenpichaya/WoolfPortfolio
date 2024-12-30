const Section2 = () => {
    return (
        <section className="h-full w-dvw flex flex-col-reverse md:flex-row justify-center items-center bg-[#000615]">
            <div className="flex flex-col">
                <h1 className="text-white text-5xl font-bold">JAY</h1>
                <h2 className="text-[#00C8FF] text-2xl">Penpichaya Suttimark</h2>
                <div className="border-t-4 border-white my-4  w-56 md:w-96"></div>
                <p className="text-white w-56 md:w-96">With a background in neuroscience and biology, I've followed a path that combines digital marketing, data analysis, and web and app development. I started learning programming and marketing on my own, building on both my academic studies and practical experience from helping with my father’s business. Each new challenge—whether it’s solving a coding problem or finding a new approach to reach a market—has taught me something valuable. I enjoy the blend of tech and creativity in this work, and with every project, I’m ready to keep learning and improving.</p>
                <h2 className="text-[#00C8FF] text-2xl mt-4">Skills</h2>
                <div className="border-t-4 border-white my-4 w-56 md:w-96"></div>
                <div className="grid grid-rows-2 grid-cols-4 justify-center items-center pb-6">
                    <img src="/la_java.svg" />
                    <img src="/spring.svg" />
                    <img src="/python.svg" />
                    <img src="/sql.svg" />
                    <img src="/html.svg" />
                    <img src="/css.svg" />
                    <img src="/tailwind.svg" />
                    <img src="/react.svg" />
                </div>
            </div>
            <div className="w-auto h-auto">
                <img src="/picture.png" />
            </div>
        </section>
    )
}

export default Section2