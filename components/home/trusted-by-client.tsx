import React from 'react'

const Client = () => {
    return (
        <>
            <section className="w-full py-12 md:py-16 lg:py-20 border-y border-blue-100 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-xl font-medium text-gray-500">Trusted by companies worldwide</h2>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                            <img
                                src="/vite.svg"
                                width={120}
                                height={40}
                                alt="Company logo"
                                className="h-8 w-auto opacity-70 grayscale"
                            />
                            <img
                                src="/vite.svg"
                                width={120}
                                height={40}
                                alt="Company logo"
                                className="h-8 w-auto opacity-70 grayscale"
                            />
                            <img
                                src="/vite.svg"
                                width={120}
                                height={40}
                                alt="Company logo"
                                className="h-8 w-auto opacity-70 grayscale"
                            />
                            <img
                                src="/vite.svg"
                                width={120}
                                height={40}
                                alt="Company logo"
                                className="h-8 w-auto opacity-70 grayscale"
                            />
                            <img
                                src="/vite.svg"
                                width={120}
                                height={40}
                                alt="Company logo"
                                className="h-8 w-auto opacity-70 grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client