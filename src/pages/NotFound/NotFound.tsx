// src/pages/NotFound.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginTop: '100px' }}
            >
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ fontSize: '96px', marginBottom: '20px' }}
                >
                    404
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ fontSize: '24px' }}
                >
                    Page Not Found
                </motion.p>
            </motion.div>
            <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Link
                    to={`/`}
                    style={{
                        marginTop: '100px',
                        padding: '10px 20px',
                        backgroundColor: '#ff6200',
                        color: '#fff',
                        fontSize: '1rem',
                        borderRadius: '5px',
                        textDecoration: 'none',
                    }}
                >
                    Back to Safe
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
