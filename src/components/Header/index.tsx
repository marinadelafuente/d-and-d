// Types
import type HeaderProps from './types'

// Assets
import DDlogo from 'assets/DDlogo.png'

const Header: React.FC<HeaderProps> = ({ handleChange }) => {
  const levels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'All']

  return (
    <div className="m-12">
      <img src={DDlogo} className="w-4/12" alt="logo" />
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Choose a level
      </label>
      <select
        onChange={handleChange}
        defaultValue={location.hash.substring(1)}
        id="levels"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-screen-lg "
      >
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Header
