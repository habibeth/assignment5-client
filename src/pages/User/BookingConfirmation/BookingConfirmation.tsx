import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const BookingConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingData = location.state;

    if (!bookingData) {
        return <div>No booking data available</div>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Booking Confirmation</h2>
            <p><strong>Date:</strong> {bookingData.date}</p>
            <p><strong>Room ID:</strong> {bookingData.room}</p>
            <p><strong>User ID:</strong> {bookingData.user}</p>
            <p><strong>Slots:</strong> {bookingData.slots?.join(', ')}</p>

            <Button type="primary" onClick={() => navigate('/')}>Go to Home</Button>
        </div>
    );
};

export default BookingConfirmation;
