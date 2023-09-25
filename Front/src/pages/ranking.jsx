// import { DragDropContext } from 'react-beautiful-dnd';
import '../assets/ranking.css'

const Ranking = () => {
  console.log('BBBB')
  return (
    <>
      <div className='container'>
        <div className="bg-white shadow-md rounded-md overflow-hidden max-w-xl mx-auto mt-8 custom-size">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">Top 5</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="flex items-center py-4 px-6">
              <span className="text-gray-700 text-lg font-medium mr-4">1.</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">Emily Jones</h3>
                  <p className="text-gray-600 text-base">1234 points</p>
                </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <span className="text-gray-700 text-lg font-medium mr-4">2.</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">David Lee</h3>
                  <p className="text-gray-600 text-base">987 points</p>
                </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <span className="text-gray-700 text-lg font-medium mr-4">3.</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">Sophia Williams</h3>
                  <p className="text-gray-600 text-base">876 points</p>
                </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <span className="text-gray-700 text-lg font-medium mr-4">4.</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">Michael Chen</h3>
                  <p className="text-gray-600 text-base">765 points</p>
                </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <span className="text-gray-700 text-lg font-medium mr-4">5.</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">Mia Davis</h3>
                  <p className="text-gray-600 text-base">654 points</p>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Ranking;