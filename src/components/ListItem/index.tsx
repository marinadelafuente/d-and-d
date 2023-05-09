import { useNavigate } from 'react-router-dom'

// Hooks
import useSpellDetails from 'hooks/useSpellDetails'

// Types
import ListItemProps from './types'

const ListItem: React.FC<ListItemProps> = ({ name, url, id }) => {
  const [spellDetails] = useSpellDetails(url)
  const navigate = useNavigate()
  const checkEntry = () => navigate(`/spells/${id}`)
  return (
    <tr
      aria-label={`Entry ${id}`}
      tabIndex={2}
      className="cursor-pointer border-x-2 border-blueberry-50 text-xs text-neutral-600 odd:bg-white even:bg-blueberry-50 hover:bg-blueberry-300 hover:text-white focus:bg-blueberry-400"
      onClick={checkEntry}
      onKeyDown={({ key }) => (key === 'Enter' || key === ' ') && checkEntry()}
    >
      <td key={name} className="whitespace-nowrap px-8 py-3 font-semibold">
        {spellDetails?.name ?? 'loading...'}
      </td>
      <td className="whitespace-nowrap px-8 py-3 ">
        {' '}
        {spellDetails?.school.name ?? 'loading...'}
      </td>

      <td className="w-60 whitespace-nowrap px-8 py-3">
        {spellDetails?.level ?? 'loading...'}
      </td>
    </tr>
  )
}

export default ListItem
