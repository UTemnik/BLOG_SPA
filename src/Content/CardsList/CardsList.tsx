import React from 'react'
import s from './cardsList.css'
import Card from './Card/Card'


const CardsList = () => {
     return (
       <ul className={s.cardsList}>
           <Card />
       </ul>
     )
}

export default CardsList;