import React from 'react'

const Testimonals = () => {
    return (
        <>
            <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Testimonials</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by businesses worldwide</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                See what our customers have to say about AutoDocuGen.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6">
                            <div className="flex items-center space-x-2">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/vite.svg"
                                        width={40}
                                        height={40}
                                        alt="User avatar"
                                        className="h-10 w-10 rounded-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">Sarah Johnson</h4>
                                    <p className="text-xs text-gray-500">Marketing Director, TechCorp</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                "SocialPilot has transformed how we manage our social media. We've seen a 40% increase in engagement
                                since we started using it."
                            </p>
                        </div>
                        <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6">
                            <div className="flex items-center space-x-2">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/vite.svg"
                                        width={40}
                                        height={40}
                                        alt="User avatar"
                                        className="h-10 w-10 rounded-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">Michael Chen</h4>
                                    <p className="text-xs text-gray-500">Social Media Manager, Startup Inc</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                "The analytics dashboard gives us insights we never had before. It's like having a social media expert
                                on the team."
                            </p>
                        </div>
                        <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6">
                            <div className="flex items-center space-x-2">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/vite.svg"
                                        width={40}
                                        height={40}
                                        alt="User avatar"
                                        className="h-10 w-10 rounded-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">Emily Rodriguez</h4>
                                    <p className="text-xs text-gray-500">Founder, Design Studio</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                "As a small business owner, SocialPilot has saved me countless hours. I can now manage all my accounts
                                in just 30 minutes a day."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonals