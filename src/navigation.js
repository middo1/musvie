import { useNavigate } from "react-router-dom";

export default function Navigation() {

    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const navigateToSignup = () => {
        // 👇️ navigate to /contacts
        navigate('/signup');
    };
}