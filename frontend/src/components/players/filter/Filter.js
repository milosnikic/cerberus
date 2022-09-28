import React from 'react'
import { motion } from 'framer-motion'

export default function Filter({ roles, nationalities, fetchPlayers }) {

    const activeClass = '';
    const inactiveClass = ' opacity-25 bg-gray-400';


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
    )
}
