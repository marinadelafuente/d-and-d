import DDlogo from 'assets/DDlogo.png'

import type HeaderProps from './types'

const Header: React.FC<HeaderProps> = ({ handleChange }) => {
  const levels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'All']

  const handleLevelChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log(ev.currentTarget.value)
  }
  return (
    <div>
      <img src={DDlogo} className="w-4/12 p-5" alt="logo" />
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Choose a level
      </label>
      <select
        onChange={handleChange}
        defaultValue={location.hash.substring(1)}
        // onChange={handleLevelChange}
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
