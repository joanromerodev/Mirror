// Module imports
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

//Components imports
import api from '../api';
import LoadingCard from './LoadingCard';
import ErrorCard from './ErrorCard';
import UserCard from './UserCard';
import Filters from './Filters';
import Pagination from './Pagination';

function CardContainer({ onFetch, }) {
    const [users, setUsers] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState({ exists: false, msg: "" });
    const [totalUsers, setTotalUsers] = useState(0);
    const [refreshKey, setRefreshKey] = useState(0);

    const limit = localStorage.getItem("limit") || 3;
    const sort = localStorage.getItem("sort") || -1;
    const from = localStorage.getItem("from") || 0;

    // Fetch all users when component mounts
    useEffect(() => {
        api.users.getAllUsers({ limit, sort, from })
            .then((res) => {
                setUsers(res);
                setTotalUsers(res.data.total)
            })
            .catch((err) => {
                onFetch(err);
                setError({ exists: true, msg: err.message });
            })
            .finally(() => {
                setDataLoading(false);
            });
    }, [limit, sort, from]);

    const handleFilterChange = () => {
        setRefreshKey(refreshKey + 1);
    }

    const handlePaginationChange = () => {
        setRefreshKey(refreshKey + 1);
    }

    const handleUserLoading = (loading) => {
        setDataLoading(loading);
    }

    const handleUserResponse = (response) => {
        onFetch({ status: response.status, message: response.data.msg });
    }

    if (dataLoading) return <LoadingCard />;

    if (error.exists) return <ErrorCard msg={error.msg} />;



    return (
        <div>
            {(users.data.total === 0) ? ("") : (<Filters totalUsers={totalUsers} onChange={handleFilterChange} />)}
            <UserCard key={refreshKey} users={users} onUserLoading={handleUserLoading} onUserResponse={handleUserResponse} />
            {(users.data.total === 0) ? ("") : (<Pagination users={users} onChange={handlePaginationChange} />)}
        </div>
    );
}

CardContainer.propTypes = {
    onFetch: PropTypes.func.isRequired,
}

export default CardContainer;