import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/AuthContext';
import { postServices } from '../../../services/postServices';
import { Loading } from './Loading';

export const GreenyOwner = ({
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
        // Render a loading indicator or null if you want to render nothing
        return <Loading/>;
    }

    return children ? children : <Outlet />
};