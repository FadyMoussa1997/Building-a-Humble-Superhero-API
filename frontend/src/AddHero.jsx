import React from 'react'
import './AddHero.css'

import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';








export function AddHero() {

    const [name, setName] = useState('');
    const [superpower, setSuperPower] = useState('');
    const [humility, setHumility] = useState('');
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !superpower) {
            return console.log('please fill all fields');
        }

        if(humility < 1 || humility > 10) {
            return console.log('number must be between 1 - 10');
        }

        const superHero = {name, superpower, humility};

        try {
            const response = await axios.post('http://localhost:5555/superheroes', superHero);
            toast.success(response.data.message);
        } catch (error) {
            const errMessage = error.response?.data?.message;
            toast.error(errMessage);
        } finally {
            setName('');
            setSuperPower('');
            setHumility('');
        }

    };


    return (

        <div className='addComponent'>
            <h2 className='intro'>
                Add a new SuperHero
            </h2>


            <form onSubmit={handleSubmit} >

                <div className='FormInput'>


                    <input
                        type="text"
                        className="input"
                        placeholder="Enter Name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        className="input"
                        placeholder="Enter SuperPower..."
                        value={superpower}
                        onChange={(e) => setSuperPower(e.target.value)}
                    />

                    <input
                        type="number"
                        className="input"
                        placeholder="Enter Humility..."
                        value={humility}
                        onChange={(e) => setHumility(parseInt(e.target.value))}
                    />

                </div>

                <button className='submitButton' type='submit'>
                    Add SuperHero
                </button>

            </form>

        </div>
    )
}