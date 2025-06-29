import React from "react";


export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-[500px] bg-white">
            <div className="max-w-3xl w-full px-6 py-12 bg-gray-100 rounded-2xl shadow-md">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight mb-6">
                    Contact Us
                </h1>

                <div className="flex items-center mb-4 text-gray-700">
                    <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span className="ml-3 text-md font-medium">
                        Shop no-09, Gharouda Complex, piller no-11, opp-Jagdev Path, Khajpura, Bailey Road, Patna-800014
                    </span>
                </div>

                <div className="flex items-center mb-4 text-gray-700">
                    <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.25 1.13a11 11 0 005.52 5.52l1.13-2.25 4.5 1.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                        />
                    </svg>
                    <span className="ml-3 text-md font-medium">+91 7209074148</span>
                </div>

                <div className="flex items-center text-gray-700">
                    <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    <span className="ml-3 text-md font-medium">cavikash23@gmail.com</span>
                </div>
            </div>
        </div>
    );
}
