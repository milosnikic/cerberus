import React, { useEffect, useState } from 'react'
import Image from '@material-tailwind/react/Image'
import FaceitImage from 'assets/img/faceit-logo.png';
import TwitterImage from 'assets/img/twitter-logo.png';
import HltvImage from 'assets/img/hltv-logo.png';
import Pagination from 'components/Pagination';

export default function Table() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/players/v1/?page=3")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPlayers(result.results)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                })
    }, []);

    return (
        <div
            className="min-w-screen min-h-screen flex justify-center font-sans overflow-hidden">
            <div className="w-full">
                <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Firstname</th>
                                <th className="py-3 px-6 text-left">Lastname</th>
                                <th className="py-3 px-6 text-left">Username</th>
                                <th className="py-3 px-6 text-left">Team</th>
                                <th className="py-3 px-6 text-left">Nationality</th>
                                <th className="py-3 px-6 text-center">Age</th>
                                <th className="py-3 px-6 text-left">Roles</th>
                                <th className="py-3 px-6 text-left">Faceit</th>
                                <th className="py-3 px-6 text-left">Twitter</th>
                                <th className="py-3 px-6 text-left">Hltv</th>
                                <th className="py-3 px-6 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {
                                players.map((player, index) => {
                                    if (error) {
                                        return <div>Error loading players</div>
                                    }
                                    if (isLoaded) {
                                        return <tr key={player.id} className={`border-b border-gray-200 hover:bg-indigo-100 ${index % 2 === 1 ? "bg-gray-100" : ""}`}>
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{player.first_name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span className='font-medium'>{player.last_name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span>{player.username}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-3 text-left">
                                                <div className="flex justify-center">
                                                    <div className="mr-2 flex items-center gap-2">
                                                        {player.teams.map(team => {
                                                            var classes = "w-7 h-7"
                                                            if (team.team.name === 'Free Agent') {
                                                                classes = "w-5 h-6"
                                                            }
                                                            return <img key={team.team.id} className={classes} title={team.team.name} alt=""
                                                                src={team.team.image} />
                                                        })}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-3 text-left">
                                                <div className="flex justify-center">
                                                    <div className="mr-2 flex items-center gap-2">
                                                        {player.nationality.map(nationality => {
                                                            return <img key={nationality.id} className="w-8 h-6 rounded" title={nationality.name} alt={nationality.name}
                                                                src={nationality.flag} />
                                                        })}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <span
                                                    className="border-gray-50 border py-1 px-3 bg-white rounded-full text-xs">{player.age}</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center">
                                                    <span className='font-medium'>{player.roles.join('/')}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6">
                                                <div className="flex justify-center">
                                                    <div className="mr-2">
                                                        <a href={player.faceit}>
                                                            <Image src={FaceitImage} className="w-6 h-6" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6">
                                                <div className="flex justify-center">
                                                    <div className="mr-2">
                                                        <a href={player.twitter} target="_blank" rel="noreferrer">
                                                            <Image src={TwitterImage} className="w-6 h-6" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6">
                                                <div className="flex justify-center">
                                                    <div className="mr-2">
                                                        <a href={player.hltv}>
                                                            <Image src={HltvImage} className="w-6 h-6" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6">
                                                <div className="flex">
                                                    <div className="mr-2">
                                                        <span>{player.email ? player.email : 'N/A'}</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                    return <></>
                                })
                            }
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
