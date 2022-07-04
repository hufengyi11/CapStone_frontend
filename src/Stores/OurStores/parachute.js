import React, {useState, useEffect } from 'react'
import axios from 'axios';

export default function parachute(){
    useEffect(() => {
        axios.get('http://localhost:8080/stores/Parachute')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, []);
}