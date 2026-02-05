import React from 'react'

const FavePage = ({ faves }) => {
  return (
    <div>
        <h1>Dina Favorit Skämt</h1>
        {(!faves || faves.length === 0) ? (
            <p>Inga favoriter än...</p>
        ) : (
          
            <ul className="  ">
                {faves.map((fav, index) => (
                    <li className='p-4 m-2 bg-gray-800 rounded-lg shadow-lg' key={index}>"{fav}"</li>
                ))}
            </ul>
        )}

                
    </div>
  )
}

export default FavePage