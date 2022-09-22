import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Progess() {
    let navigate = useNavigate()

    // membuat state untuk menampung nilai progress
    const [style, setStyle] = useState({})

    // setelah 2 detik mengubah nilai progress menjadi 100%
    setTimeout(() => {
        const newStyle = {
            width: `100%`
        }
        setStyle(newStyle)

    }, 2000)

    // setelah 5 detik berpindah ke halaman dashboard
    setTimeout(() => {
        navigate('/dashboard')
    }, 5000)

    return (
        <div className="progress-bar">
                                                {/* mengambil nilai style dari state */}
            <div className="progress-done" style={style}>
            </div>
        </div>
    )
}

export default Progess;