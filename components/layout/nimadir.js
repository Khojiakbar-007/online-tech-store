import React, { useState } from 'react';

function Nimadir() {
    const [korinvotti, setKorinvotti]=useState(true)
    if (korinvotti)
    return (
        <div onClick={() => setKorinvotti(false)}>
            Betta nimadir bor
            <h1>Yana nimadir lorem</h1>
        </div>
    );
    else return <></>
}

export default Nimadir;