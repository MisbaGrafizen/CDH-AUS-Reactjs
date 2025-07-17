import React from 'react'

export default function NriComponent() {
    const benefits = [
        "Save up to 70% vs. Aussie prices",
        "World-class, painless treatments",
        "Surgery + Tourism + Recovery = All-in-one",
        "Free quotes during our Australia visit",
    ]
    return (
        <>








            <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    <div className="flex items-center gap-4 mb-8">

                        <div className="flex-shrink-0">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-500">
                                <path
                                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            Why NRIs Fly to India for Dental Care
                        </h2>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {/* Bullet Point */}
                                <div className="flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full mt-3"></div>

                                {/* Benefit Text */}
                                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}
