import React, { useState, useEffect } from 'react'
import { get } from '../../../utils';
import Search from './Search';
import Filter from './Filter';

export default function FilterContainer({ setPlayers, setLoading, setError, setNext, setPrevious, setTotalPlayers }) {
    const [query, setQuery] = useState("");
    const [nationalities, setNationalities] = useState([]);
    const [roles, setRoles] = useState([]);

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

        const getQueryParamsRoles = () => {
            return '&roles=' + roles.filter(role => role.active).map(role => role.name).join(",");
        }

        const getQueryParamsNationalities = () => {
            return '&nationalities=' + nationalities.filter(nation => nation.active).map(nation => nation.name).join(",");
        }
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


    return (
        <div className="w-full shadow-xl p-5 rounded-md bg-white">
            <Search setQuery={setQuery} />
            <Filter roles={roles} nationalities={nationalities} fetchPlayers={fetchPlayers} />
        </div>
    )
}
