import React, { useState } from "react";
const Section3 = () => {

    const slides = [
        {
            title: "CPF IT CENTER",
            description: "Developer | Full-time",
            date: "May 2023 - Present",
            bullets: [
                "Developed and applied solutions for a web application, enhancing functionality and user experience, resulting in a 30% increase in user engagement.",
                "Implemented Agile practices that enhanced communication and collaboration, leading to a 40% decrease in defects reported in production releases, elevating overall software quality.",
                "Developed and deployed RESTful APIs that improved data retrieval times by 40%, enabling seamless access to critical application features and boosting user engagement by 15%.",
                "Reduced average bug resolution time by 30%, from 10 days to 7 days, by implementing a streamlined triage process and prioritizing high-impact issues.",
                "Optimized database queries, resulting in a 30% reduction in response time and improving overall application performance for over 10,000 daily users."
            ],
        },
        {
            title: "LearnBalanceGroup",
            description: "Computer Supervisor | Part-time",
            date: "Nov 2022 - May 2023",
            bullets: [
                "Teach CS50 classes for High schoolers and information technology for grade 9.",
                "Developed and established a new curriculum for a computer science course, leading to a 30% increase in student engagement and participation.",
            ],
        },
        {
            title: "Royal Ginsam",
            description: "Digital Marketing Specialist | Freelance",
            date: "Feb 2020 - May 2020",
            bullets: [
                "Created WordPress a new modern website hosting on Google Cloud Platform.",
                "Wrote content for SEO. Manage paid Ads on the Google Ads platform increasing the website's visitors.",
                "Introduced Line MyShop to the company for better customer service.",
                "Designed advertising posters for social media ads and posts on Facebook and Line. ",
            ],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <h1 className="text-5xl font-bold m-6 text-center">Experience</h1>
            <div className="relative w-full max-w-3xl mx-auto p-4">
                {/* Slide Content */}
                <div className="p-8 bg-gray-100 rounded-lg shadow-blue-400 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">{slides[currentIndex].title}</h2>
                    <div className="border-t-4 border-black my-4  w-full"></div>
                    <h4 className="text-xl font-bold">{slides[currentIndex].description}</h4>
                    <h4 className="text-xl">{slides[currentIndex].date}</h4>
                    <ul className="text-left mb-6 list-disc list-inside text-gray-700 space-y-2">
                        {slides[currentIndex].bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>

                {/* Navigation Points */}
                <div className="mt-4 flex justify-center space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                }`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>     </div>
                        
    );                      
}

export default Section3