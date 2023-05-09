import ErrorPage from 'pages/ErrorPage'
import useSpellDetails from 'hooks/useSpellDetails'
import { useParams, useNavigate } from 'react-router-dom'

const DetailedItemModal: React.FC = () => {
  const { id } = useParams<{ id?: string }>()
  const [details, detailsError] = useSpellDetails(`/api/spells/${id}`)
  const navigate = useNavigate()

  if (detailsError) {
    return <ErrorPage error={detailsError} />
  }

  if (!details) {
    return <div>Loading ...</div>
  }
  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-blueberry-500 rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-white">
                {details.name.toUpperCase()}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-50 hover:text-blueberry-500 rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="defaultModal"
                onClick={() => navigate('/spells')}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6">
              <div className="flex flex-col gap-2 mb-2">
                <h5 className="text-white font-bold text-lg">Description:</h5>
                <p className="text-base text-white">{details.desc}</p>
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <h5 className="text-white font-bold text-lg">Classes:</h5>
                <ul className="flex gap-3">
                  {details.classes.map(({ name }) => (
                    <li className="text-base mt-1 text-blueberry-400 bg-gray-100 px-2 py-1 rounded-full">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-white font-bold text-lg">Range:</h5>
                <p className="text-base text-white">{details.range}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-white font-bold text-lg">Duration:</h5>
                <p className="text-base text-white">{details.duration}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-white font-bold text-lg">Level:</h5>
                <p className="text-base text-white">{details.level}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-white font-bold text-lg">School:</h5>
                <p className="text-base text-white">{details.school.name}</p>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                I accept
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Decline
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div
        modal-backdrop=""
        className="bg-gray-900 bg-opacity-50 fixed inset-0 z-40"
      ></div>
    </>
  )
}

export default DetailedItemModal
