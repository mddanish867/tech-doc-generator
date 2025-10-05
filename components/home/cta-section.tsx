import React from 'react';
import {
    Clock,
    Users2,
} from "lucide-react";

const CTS = () => {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Ready to transform your social media strategy?
                            </h2>
                            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join thousands of businesses that use SocialPilot to grow their social presence.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-5">Start Free Trial</button>
                            <button className="bg-blue-700 text-white hover:bg-blue-900 px-8 py-5">
                                Schedule a Demo
                            </button>
                        </div>
                        {/* <div className="flex items-center space-x-4 text-sm text-blue-100">
                            <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>14-day free trial</span>
                            </div>
                            <div className="flex items-center">
                                <Users2 className="mr-1 h-4 w-4" />
                                <span>No credit card required</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTS