import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion/dist/framer-motion";

export default function Filter() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [nationalities, setNationalities] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/players/v1/nationalities")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setNationalities(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch("http://localhost:8000/api/players/v1/roles")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRoles(result.results)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const [isSloveniaActive, setSloveniaActive] = useState(false);
    const [isSerbiaActive, setSerbiaActive] = useState(false);
    const [isBosniaAndHerzegovinaActive, setBosniaAndHerzegovinaActive] = useState(false);
    const [isCroatiaActive, setCroatiaActive] = useState(false);
    const [isNorthMacedoniaActive, setNorthMacedoniaActive] = useState(false);
    const [isSwedenActive, setSwedenActive] = useState(false);
    const [isMontenegroActive, setMontenegroActive] = useState(false);
    const [isHungaryActive, setHungaryActive] = useState(false);

    const toggleClass = (buttonName) => {
        if (buttonName === 'slovenia')
            setSloveniaActive(!isSloveniaActive);
        else if (buttonName === 'serbia')
            setSerbiaActive(!isSerbiaActive);
        else if (buttonName === 'bih')
            setBosniaAndHerzegovinaActive(!isBosniaAndHerzegovinaActive);
        else if (buttonName === 'croatia')
            setCroatiaActive(!isCroatiaActive);
        else if (buttonName === 'northmacedonia')
            setNorthMacedoniaActive(!isNorthMacedoniaActive);
        else if (buttonName === 'sweden')
            setSwedenActive(!isSwedenActive);
        else if (buttonName === 'montenegro')
            setMontenegroActive(!isMontenegroActive);
        else if (buttonName === 'hungary')
            setHungaryActive(!isHungaryActive);
    };

    return (
        <div className="w-full shadow-xl p-5 rounded-md bg-white">
            <div className="relative">
                <p className="text-xl bold uppercase text-gray-700 mb-2">
                    Search
                </p>
                <div className="absolute flex items-center ml-2 h-full">
                    <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                    </svg>
                </div>

                <input type="text" placeholder="Search by firstname, lastname, username, team..." className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />
            </div>
            <div className="overflow-hidden mt-4  border-gray-200 rounded">
                <h1 className="flex items-center text-xl bold uppercase text-gray-700 hover:text-gray-200">
                    <span>Filter players</span>
                </h1>
                <form action="" className="border-t border-gray-200 lg:border-t-0">
                    <motion.div
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: .7
                        }}
                        className="flex items-center justify-between mb-4 mt-4">
                        {
                            roles.map(role => {
                                if (error) {
                                    console.log(`Error: ${error}`);
                                    return <></>;
                                }
                                if (isLoaded) {
                                    return <button key={role.id} className={`border border-gray-400 rounded-xl py-1 px-3 hover:bg-gray-500 cursor-pointer`}>
                                        <span className="font-medium">{role.name}</span>
                                    </button>
                                }

                                return <></>
                            })
                        }
                        {
                            nationalities.map(nationality => {
                                if (error) {
                                    console.log(`Error: ${error}`);
                                    return <></>;
                                }
                                if (isLoaded) {
                                    return <button key={nationality.id} onClick={() => toggleClass('serbia')} className={`border border-gray-400 rounded-xl py-1 px-3 hover:bg-gray-500 cursor-pointer focus:outline-none ${isSerbiaActive ? 'border-2 border-indigo-500' : ''}`}>
                                        <img className="w-8 h-6 rounded" title={nationality.name} alt={nationality.name}
                                            src={nationality.flag} />
                                    </button>
                                }

                                return <></>
                            })}
                    </motion.div>
                </form>
            </div>
        </div>
    )
}
