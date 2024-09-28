import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SignUpPage from '../SignUpPage';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const deleteCookie =(name) =>{
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        deleteCookie('authToken');
        navigate("/")
        console.log('User logged out');
    };

    const handleOnClickOfDetailFiling = async () =>{
        navigate("/userDetail/genInformation")
        console.log("hi")

    }

    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                <Link to="/" style={styles.link}>MyApp</Link>
            </div>
            <div style={styles.profileContainer}>
                <div onClick={toggleDropdown} style={styles.profileIcon}>
                    {/* Placeholder for profile image */}
                    <img src="https://via.placeholder.com/30" alt="Profile" style={styles.profileImage} />
                </div>
                {isOpen && (
                    <div style={styles.dropdownMenu}>
                        <button style={styles.button} onClick= {handleOnClickOfDetailFiling}>Details</button>
                        <button style={styles.button} onClick={() => console.log('Profile clicked')}>Profile</button>
                        <button style={styles.button} onClick={() => console.log('Settings clicked')}>Settings</button>
                        <button style={styles.button} onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff'
    },
    brand: {
        fontSize: '24px',
        fontWeight: 'bold'
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    },
    profileContainer: {
        position: 'relative'
    },
    profileIcon: {
        cursor: 'pointer',
        borderRadius: '50%',
        overflow: 'hidden',
        width: '30px',
        height: '30px',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    dropdownMenu: {
        position: 'absolute',
        top: '100%',
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        overflow: 'hidden'
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#fff',
        color: '#333',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        outline: 'none'
    }
};

export default Navbar;
