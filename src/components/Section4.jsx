import React, { useState } from "react";
const Section4 = () => {
    const data = [
        {
            school: "Woolf: 2024 - 2026",
            class: "Master of Science in Computer Science program | Computer Software Engineering"
        },
        {
            school: "Mahidol University: 2024",
            class: "Bachelor of Science | Biology/Biological Sciences, General"
        },
        {
            school: "Harvard University: 2022",
            class: "CS50x: CS50's Introduction to Computer Science"
        },
        {
            school: "Newton Sixth Form School: 2022",
            class: "Diploma of Education | Software Development"
        },
        {
            school: "University of Michigan: 2020",
            class: "Specialization Course in Python"
        },
    ]

    const project = [
        {
            project: "Machine Learning Application on Genome : 2020",
            desc: "Associated with Mahidol University",
            detail: [
                "Characterization of biological features contributing to gene expression variation using a machine learning approach from a study by Sigalova et al. (2020).",
                "Achieved a 25% increase in precision for gene classification tasks by implementing advanced tuning techniques, significantly improving the overall reliability of the application."
            ],
            image: "/covid.png"
        },
        {
            project: "PLANTA project",
            desc: "Associated with Mahidol University",
            detail: [
                "Winning a pitching idea and join other winners in Active Tech Citizen Season 2 by using technology and a vertical greenery planting system to create a suitable environment for plants in the city. Our project later developed into an educational community-based platform that encourages people in the city to plant more.",
            ],
            image: "/planta.jpg"
        }

    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <section className="h-dvh w-full flex flex-col md:flex-row items-center justify-center bg-[#000615]">
            <div className="px-4 ">
                <h1 className="text-white  text-5xl font-bold py-4">Education</h1>
                {data.map((info, index) => (
                    <div className="pb-4">
                        <h2 className="text-[#00C8FF] text-2xl font-bold">{info.school}</h2>
                        <div className="border-t-4 border-white my-1  max-w-lg"></div>
                        <p className="text-white">{info.class}</p>
                    </div>
                ))}
            </div>
            <div className=" w-full max-w-3xl mx-4 p-4">

                <h1 className="text-white  text-5xl font-bold py-4">Project</h1>
                <div className="p-8 bg-transparent rounded-lg shadow-blue-400 shadow-xl">
                    <h2 className="text-[#00C8FF] text-2xl font-bold mb-4">{project[currentIndex].project}</h2>
                    <div className="border-t-4 border-white my-4  w-full"></div>
                    <h4 className="text-white text-xl font-bold">{project[currentIndex].desc}</h4>
                    <ul className="text-left mb-6 list-disc list-inside text-white space-y-2">
                        {project[currentIndex].detail.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                    <img src={project[currentIndex].image} className="w-36" />
                </div>

                <div className="mt-4 flex justify-center space-x-2">
                    {project.map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                }`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>

        </section >
    )
}

export default Section4