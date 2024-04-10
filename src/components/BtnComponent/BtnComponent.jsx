import style from './style.module.scss'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

library.add(fab);

export default function BtnComponent() {
    const [icon, setIcon] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                const iconsArray = Object.values(fab);
                const randomIndex = Math.floor(Math.random() * iconsArray.length);
                setIcon(iconsArray[randomIndex]);
                setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [loading]);

    const getRandomIcon = () => {
        setLoading(true);
    };

    return (
        <>
            <div className={style.wrapper}>

                {icon && <FontAwesomeIcon icon={icon} size="6x" />}

                <Button onClick={getRandomIcon} variant="contained" disabled={loading}>
                    {loading ? 'Loading...' : 'Show Random Icon'}
                </Button>

            </div>
        </>
    )
} 