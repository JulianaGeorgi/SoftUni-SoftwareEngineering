import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export const Logout = () => {

    const navigate = useNavigate();

    const { logout } = useAuth()

    async function handleLogout() {
        try {
            await logout();
            navigate("/");
        } catch {
            alert("Failed to log out");
        }
    }

    return (
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
            <Link to="/logout"
                className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref=""
                onClick={handleLogout}
            >
                Logout
            </Link>
        </li>
    )
}