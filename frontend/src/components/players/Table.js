import React from 'react'
import Image from '@material-tailwind/react/Image'
import FaceitImage from 'assets/img/faceit-logo.png';
import TwitterImage from 'assets/img/twitter-logo.png';
import HltvImage from 'assets/img/hltv-logo.png';
import SkeletonTable from './SkeletonTable';

export default function Table({ players, loading, error, totalPlayers }) {
    if (loading) {
        return <SkeletonTable />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (players.length === 0) {
        return <div
            className="min-w-screen flex justify-center font-sans overflow-hidden">
            <div className="w-full">
                <div
                    className="bg-white shadow-md rounded my-6">
                    <div className='flex justify-center items-center p-5'>
                        <span className='font-large'>There are no players for specified criteria</span>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div
            className="min-w-screen flex justify-center font-sans overflow-hidden">
            <div className="w-full">
                <div
                    className="bg-white shadow-md rounded my-6">
                    <div className="flex rounded mb-1 px-2 justify-end text-gray-600">Total players: {totalPlayers}</div>
                    <table
                        className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Firstname</th>
                                <th className="py-3 px-6 text-left">Lastname</th>
                                <th className="py-3 px-6 text-left">Username</th>
                                <th className="py-3 px-6 text-left">Team</th>
                                <th className="py-3 px-6 text-left">Nationality</th>
                                <th className="py-3 px-6 text-center">Age</th>
                                <th className="py-3 px-6 text-left">Roles</th>
                                <th className="py-3 px-6 text-center">Socials</th>
                                <th className="py-3 px-6 text-left">Email
                                    <span
                                        className='border-2 rounded-full px-1 py-0 ml-1 opacity-30 border-gray-500 text-small cursor-help'
                                        title="Click on players email to copy it to clipboard">
                                        ?
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {
                                players.map((player, index) => {
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
                                                        var classes = "w-6 h-6"
                                                        if (team.team.name === 'Free Agent') {
                                                            classes = "w-4 h-6"
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
                                                        return <img key={nationality.id} className="w-8 h-6 rounded border border-gray-100" title={nationality.name} alt={nationality.name}
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
                                            <div className="flex justify-center gap-4">
                                                <div className="mr-2 hover:scale-105">
                                                    <a href={player.faceit}>
                                                        <Image src={FaceitImage} className="w-7 h-7" />
                                                    </a>
                                                </div>
                                                <div className="mr-2 hover:scale-105">
                                                    <a href={player.twitter} target="_blank" rel="noreferrer">
                                                        <Image src={TwitterImage} className="w-7 h-7" />
                                                    </a>
                                                </div>
                                                <div className="mr-2 hover:scale-105">
                                                    <a href={player.hltv}>
                                                        <Image src={HltvImage} className="w-7 h-7" />
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 max-w-250">
                                            <div className="flex">
                                                <div className="mr-2 text-ellipsis hover:scale-105">
                                                    <span onClick={() => { if (player.email) navigator.clipboard.writeText(player.email) }}
                                                        className={`${player.email ? "hover:text-cyan-700 cursor-pointer" : "text-red-500"}`}>{player.email ? player.email : 'N/A'}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
