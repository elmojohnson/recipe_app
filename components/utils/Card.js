import React from 'react'

const Card = ({children}) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden flex flex-col h-full hover:shadow-xl">{children}</div>
  )
}

export default Card