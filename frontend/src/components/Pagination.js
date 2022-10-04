import React from 'react'
import { getRequest } from '../utils'

export default function Pagination({ setPlayers, next, previous, setNext, setPrevious, setLoading, setError, setTotalPlayers, totalPlayers, players }) {

    const searchPlayers = (event, url) => {
        if (url) {
            const fetchPlayers = async () => {
                try {
                    setLoading(true);
                    const data = await getRequest(url);

                    setTotalPlayers(data.count);
                    setPlayers(data.results);
                    setNext(data.next);
                    setPrevious(data.previous);
                    setLoading(false);
                } catch (err) {
                    setError(err);
                }
            }

            fetchPlayers();
        }
    }
    return (
        <div className='flex mt-2 pt-2 bg-white'>
            <div className='flex justify-end w-full'>
                <ol className="flex gap-4 text-xs font-medium items-center">
                    <li>
                        <div
                            onClick={(e) => searchPlayers(e, previous, -1)}
                            className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded ${!previous ? 'not-allowed' : 'cursor-pointer'}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </li>

                    <li>
                        <div
                            onClick={(e) => searchPlayers(e, next, 1)}
                            className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded ${!next ? 'not-allowed' : 'cursor-pointer'}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </li>
                </ol>
            </div>
            <div className="flex rounded mb-1 px-2 justify-end items-end text-sm text-gray-700 w-full gap-4">
                <span>
                    {players.length} / 12
                </span>
                <span>
                    Total players: {totalPlayers}
                </span>
            </div>
        </div>
    )
}
