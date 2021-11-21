import React, { useEffect, useState } from 'react';

const AddPartners = () => {
    const [partners, setPartners] = useState([]);
console.log(partners)
useEffect(() => {
        // const uri="./testingData.json"
        fetch('https://radiant-retreat-40420.herokuapp.com/partners')
            .then(res => res.json())
        .then(data=>setPartners(data))
    }, [])


    return (
        <div>
            {partners.length}
        </div>
    );
};

export default AddPartners;


// "id":"5",
//       "name":"Tofazzal",
//       "live":"Muscat, Oman",
//       "phone":"+968 93554255",
//       "email":"topuahammed322@gmail.com",
//       "address":"Mymensingh",
//       "parmanentAddress":"Dhobaura,Mymensingh",
//       "passport":"BE0323454",
//       "amount":"30,000",
//       "picture":"src=\"https://ibb.co/Ky8GNXp\""