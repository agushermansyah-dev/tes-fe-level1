"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function UserDetail() {
    const [joke, setJoke] = useState({});

    const fetchRandomJoke = async () => {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        setJoke(res.data);
    };
    useEffect(() => {
        fetchRandomJoke();
    }, []);

    if (!joke) return <p>Loading...</p>;

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="flex items-center justify-center h-screen">
                    <div className=" p-4">
                        <Image
                            src="/joke.webp"
                            alt="Joke Icon"
                            width={200}
                            height={200}
                        />
                        <div className="mt-8">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-5xl font-bold text-blue-800 dark:text-white lg:text-3xl lg:w-96">
                                {joke.setup}
                            </h1>
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>
                            <h2 className="max-w-lg font-semibold mt-6 text-2xl text-gray ">
                                “ {joke.punchline}”
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
