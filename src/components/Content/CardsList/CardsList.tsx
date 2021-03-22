import React from 'react'
import Card from './Card/Card'
import s from './cardsList.less'


const CardsList = () => {
     return (
       <ul className={s.cardsList}>
           <Card />
       </ul>
     )
}

export default CardsList;