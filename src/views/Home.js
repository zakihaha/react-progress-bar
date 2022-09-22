import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    let navigate = useNavigate()

    const pay = (e) => {
        e.preventDefault()

        // cara untuk berpindah halaman
        navigate('/payment');
    };

    return (
        <div className='center'>
            <form onSubmit={pay}>
                <button type='submit'>Bayar sekarang</button>
            </form>
        </div>
    );
}

export default Home;