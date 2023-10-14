import React from 'react';
import { useParams } from 'react-router-dom';

const Param1 = () => {
    const { id } = useParams();
    return (
        <div className='param1 comp'>
            <h2>요청 id : {id}</h2>
        </div>
    );
};

export default Param1;