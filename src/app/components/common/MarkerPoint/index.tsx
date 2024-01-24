import React,{useEffect,useState} from 'react';


import "./index.scss"

const MarkerPoin = () => {
    const [ isShow, setIsShow] = useState(false)

    useEffect(()=>{

        setTimeout(()=> setIsShow(true),5500)

    },[])

    return (
    <div className='container'>
       {isShow && <a target='_blank' href='https://www.google.com/maps/place/Smart+Hub+Obolon/@50.5135907,30.4946633,18z/data=!4m6!3m5!1s0x40d4d3d87336713f:0x487a5df3ab61e7e8!8m2!3d50.5135733!4d30.4955916!16s%2Fg%2F11k0t9bhqk?entry=ttu' rel="noreferrer">
        <div className='pin bounce'></div>
        <div className='pulse'></div>  </a>}
        </div>
    );
};

export default MarkerPoin;