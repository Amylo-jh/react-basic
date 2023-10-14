import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Param2 = () => {

    // param?id=6&page=2
    const [params] = useSearchParams();
    const id = params.get("id");
    const page = params.get("page");
    
    return (
        <div className='param2 comp'>
            <p>id = {id}</p>
            <p>page = {page}</p>
        </div>
    );
};

export default Param2;