import { useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { postServices } from '../../services/postServices';

import { Loading } from './Loading';

export const GreenyOwnerGuard = ({
    children,
}) => {
    const { greenyId } = useParams();
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function checkifIsOwner() {
            const currentGreeny = await postServices().getGreenyById(greenyId);
            const isOwner = currentUser && currentUser.uid === currentGreeny.ownerId;
            setIsLoading(false);
            if (!isOwner) {
                navigate(`/greenies/${greenyId}`);
                return;
            }
        }
        checkifIsOwner();
    }, [currentUser, greenyId, navigate])

    if (isLoading) {
        return <Loading/>;
    }

    return children ? children : <Outlet />
};