import React, { useState } from 'react';
import Progress from '../components/Progess';

function Payment(props) {
    return (
        <div className='center'>
            <div>
                <h1>Permintaan anda sedang kami proses</h1>

                {/* memanggil komponen Progress */}
                <Progress />
            </div>
        </div>
    );
}

export default Payment;