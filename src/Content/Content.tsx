import React from 'react'
import s from './content.css'

interface IContentProps {
    children? : React.ReactNode
}

const Content = ({children} : IContentProps) => {
     return (
         <main>
            {children}
         </main>
     )
}

export default Content;