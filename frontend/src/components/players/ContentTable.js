import React, { useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import Pagination from '../Pagination';

export default function ContentTable() {
    const [players, setPlayers] = useState([]);
    const [totalPlayers, setTotalPlayers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <Filter setPlayers={setPlayers} setLoading={setLoading} setError={setError} setNext={setNext} setPrevious={setPrevious} setTotalPlayers={setTotalPlayers} />
                        <Table players={players} loading={loading} error={error} setPlayers={setPlayers} totalPlayers={totalPlayers} />
                        <Pagination setPlayers={setPlayers} next={next} previous={previous} setNext={setNext} setPrevious={setPrevious} setLoading={setLoading} setError={setError} setTotalPlayers={setTotalPlayers} />
                    </div>
                </div>
            </div>
        </section>
    )
}
