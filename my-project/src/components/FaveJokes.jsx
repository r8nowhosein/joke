import React from 'react'
import { Link } from 'react-router-dom';

const FaveJokes = ({ list }) => {
  return (
    <div className="mt-8 border-t pt-4">
      <h3 className="font-bold">Dina sparade favoriter:</h3>
      {/* Kolla om listan finns och har innehåll */}
      {!list || list.length === 0 ? (
        <p className="text-gray-500">Inga favoriter än...</p>
      ) : (
        <ul className="list-disc pl-5">
          {list.map((fav, index) => (
            <li key={index} className="mb-2 italic">"{fav}"</li>
          ))}
        </ul>
      )}
          <p className='text-3xl mt-12 underline'><Link to="/faves">Se all dina sparade skämt här</Link> {list ? list.length : 0} st</p>

    </div>
  )
}

export default FaveJokes