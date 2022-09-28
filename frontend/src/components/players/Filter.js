import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion/dist/framer-motion";
import { get } from '../../utils';

export default function Filter({ setPlayers, setLoading, setError, setNext, setPrevious, setTotalPlayers }) {
    const [query, setQuery] = useState("");
    const [nationalities, setNationalities] = useState([]);
    const [roles, setRoles] = useState([]);

    const activeClass = '';
    const inactiveClass = ' opacity-25 bg-gray-400';

    const fetchPlayers = async () => {
        setLoading(true);
        try {
            var url = `/api/players/v1/?search=${query}`;
            if (roles.some(role => !role.active) || nationalities.some(nation => !nation.active)) {
                const rolesSelected = getQueryParamsRoles();
                const nationalitiesSelected = getQueryParamsNationalities();
                url = `${url}${rolesSelected}${nationalitiesSelected}`;
            }
            console.log(url);
            const data = await get(url)
            setTotalPlayers(data.count);
            setPlayers(data.results);
            setNext(data.next);
            setPrevious(data.previous);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }

    const getQueryParamsRoles = () => {
        return '&roles=' + roles.filter(role => role.active).map(role => role.name).join(",");
    }

    const getQueryParamsNationalities = () => {
        return '&nationalities=' + nationalities.filter(nation => nation.active).map(nation => nation.name).join(",");
    }

    useEffect(() => {
        if (query.length === 0 || query.length > 2)
            fetchPlayers();
    }, [query]);

    useEffect(() => {
        const fetchNationalities = async () => {
            setLoading(true);
            try {
                const data = await get("/api/players/v1/nationalities");
                const nationalities = data.results.map(nationality => ({ ...nationality, active: true }))
                setNationalities(nationalities);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        }
        const fetchRoles = async () => {
            setLoading(true);
            try {
                const data = await get("/api/players/v1/roles");
                const roles = data.results.map(role => ({ ...role, active: true }))
                setRoles(roles);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        }
        fetchNationalities();
        fetchRoles();
    }, [setPlayers, setLoading, setError, setNext, setPrevious])

    const toggleClass = (event, button) => {
        event.preventDefault();
        var element = event.target;
        if (event.target.tagName.toLowerCase() === 'img' ||
            event.target.tagName.toLowerCase() === 'span') {
            element = event.target.parentNode;
        }

        button.active = !button.active;
        if (button.active) {
            element.className = element.className.replace(inactiveClass, '');
            element.className += activeClass;
        } else {
            if (roles.every(role => !role.active) && nationalities.every(nation => !nation.active)) {
                button.active = !button.active;

                return;
            }
            element.className += inactiveClass;
            element.className = element.className.replace(activeClass, '');
        }
        fetchPlayers();
    };

    return (
        <div className="w-full shadow-xl p-5 rounded-md bg-white">
            <div className="relative">
                <p className="text-xl bold uppercase text-gray-700 mb-2">
                    Search
                </p>
                <div className="absolute flex items-center ml-2 h-full pb-35 opacity-30">
                    <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="gray" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                    </svg>
                </div>

                <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search by firstname, lastname, username, team..." className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />
            </div>
            <div className="overflow-hidden mt-4 border-gray-200 rounded">
                <h1 className="flex items-center text-xl bold uppercase text-gray-700">
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
                                return <button key={role.id} onClick={(event) => { toggleClass(event, role) }} className={`border border-gray-400 rounded-xl py-1 px-3 hover:bg-gray-500 hover:opacity-75 cursor-pointer focus:outline-none active:outline-none${role.active ? activeClass : inactiveClass}`}>
                                    <span className="font-medium">{role.name}</span>
                                </button>
                            })
                        }
                        {
                            nationalities.map(nationality => {
                                return <button key={nationality.id} onClick={(event) => toggleClass(event, nationality)} className={`border border-gray-400 rounded-xl py-1 px-3 hover:bg-gray-500 hover:opacity-75 cursor-pointer focus:outline-none active:outline-none ${nationality.active ? activeClass : inactiveClass}`}>
                                    <img className="w-8 h-6 rounded" title={nationality.name} alt={nationality.name}
                                        src={nationality.flag} />
                                </button>
                            })
                        }
                    </motion.div>
                </form>
            </div>
        </div>
    )
}
