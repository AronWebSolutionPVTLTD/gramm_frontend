import React from "react";
import { useNavigate } from "react-router-dom";
import {GoChevronLeft} from 'react-icons/go'

export default function BackButton(){
    const navigate = useNavigate();
    return(
        <button className="text-2xl" onClick={()=>navigate(-1)}><GoChevronLeft /></button>
    )
}