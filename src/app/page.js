import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="lg:pt-10 pt-0 lg:pl-8 h-full">
                <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-28">
                    {/* Text Section */}
                    <div className="w-full xl:col-span-6 lg:col-span-6">
                        <h1 className="py-8 text-gray-800 font-bold text-4xl lg:text-5xl lg:text-left text-center leading-tight">
                            Learn Programming <span className="text-indigo-500">Effectively</span>
                        </h1>
                        <p className="text-gray-600 text-lg lg:text-left text-center mb-6">
                            Dive into high-quality courses, coding articles, and quizzes tailored to improve your
                            programming skills to the next level.
                        </p>
                        <Link href="/courses">
                            <button
                                className="bg-indigo-500 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-600 transition-all duration-500 w-full lg:w-auto"
                            >
                                Get Started
                            </button>
                        </Link>

                    </div>

                    {/* Image Section */}
                    <div className="w-full xl:col-span-6 lg:col-span-6">
                        <div className="max-w-sm mx-auto lg:max-w-lg">
                            <img
                                src="/brain_logo.jpg"
                                alt="Programming Illustration"
                                className="rounded-lg object-cover w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Stats Section */}

            <section className="mt-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">
                        <div className="w-full lg:w-60">
                            <h2
                                className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left"
                            >
                                We in numbers
                            </h2>
                            {/*<p className="text-sm text-gray-500 leading-6 text-center lg:text-left">*/}
                            {/*    We help you to unleash the power within your business*/}
                            {/*</p>*/}
                        </div>
                        <div className="w-full lg:w-4/5">
                            <div
                                className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between"
                            >
                                  <div className="block">
                                      <div
                                          className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                                      >
                                          10+
                                      </div>
                                      <span className="text-gray-900 text-center block lg:text-left"
                                      >Programming Quizzes
                                </span>
                                  </div>
                                <div className="block">
                                    <div
                                        className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                                    >
                                        100+
                                    </div>
                                    <span className="text-gray-900 text-center block lg:text-left"
                                    >Students
                            </span>
                                </div>
                                <div className="block">
                                    <div
                                        className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                                    >
                                        200+
                                    </div>
                                    <span className="text-gray-900 text-center block lg:text-left"
                                    >Programming Projects</span
                                    >
                                </div>
                                <div className="block">
                                    <div
                                        className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                                    >
                                        10+
                                    </div>
                                    <span className="text-gray-900 text-center block lg:text-left"
                                    >Programming Courses</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
