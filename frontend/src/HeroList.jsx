import React from 'react'
import './HeroList.css'

import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';



export function HeroList() {

    const [superheroes, setSuperHeroes] = useState([]);
    const [loading, setLoading] = useState(false);




// function for fetching data from backend server
    const fetchSuperHeroes = async () => {

        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5555/superheroes');
            toast.success(response.data.message);
            setSuperHeroes(response.data.superheroes);
            
        } catch (error) {
            const errMessage = error.response?.data?.message;
            toast.error(errMessage);
        } finally {
            setLoading(false);
        }

    }




    return (
        <div className='heroListComponent'>
            

            <button className='fetchButton' disabled={loading} onClick={fetchSuperHeroes} >
                {loading ? 'loading...' : 'Fetch List of SuperHeroes'}
            </button>


            <div className='heroList'>

                {superheroes.length > 0 ? (
                    <>

                        {superheroes.map((hero, index) => (
                            <div key={index} className='hero'>
                                <p>{hero.name}</p>
                                <p>{hero.superpower}</p>
                                <p>{hero.humility}</p>

                            </div>
                        ))

                        }
                    </>
                ) : (
                    <p className='empty'>List is Empty</p>
                )

                }



            </div>


        </div>
    )
}