import React from 'react'
import s from './card.css'


const Card = () => {
     return (
           <li className={s.card}>
                    <div className={s.textContent}>

                        <h2>
                            <a href="/" className={s.postLink}>
                            Следует отметить, что новая модель организационной деятельности  Следует отметить, что новая модель организационной деятельности 
                            </a>
                        </h2>
                    </div>
                    <div className={s.preview}></div>
                    <div className={s.menu}></div>
                    <div className={s.controls}></div>
                    апп
           </li>
     )
}

export default Card;