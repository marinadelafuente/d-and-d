import { useParams } from 'react-router-dom'

// Components
import ListItem from '../ListItem'

// Types
import TableListProps from './types'

const TableList: React.FC<TableListProps> = ({ spells }) => {
  const { id } = useParams<{ id?: string }>()
  return (
    <>
      <table
        className={`overflow-hidden rounded-lg border border-blueberry-50 text-left text-xs font-light ${
          !!id && 'blur-sm'
        }`}
      >
        <thead
          tabIndex={1}
          className="rounded border-b bg-blueberry-400 text-sm text-white"
        >
          <tr>
            <th scope="col" className="px-8 py-4">
              Name
            </th>
            <th scope="col" className="px-8 py-4">
              School
            </th>
            <th scope="col" className="px-8 py-4">
              Level
            </th>
          </tr>
        </thead>
        <tbody>
          {spells.map(({ name, url, index }) => {
            return <ListItem key={index} id={index} {...{ name, url }} />
          })}
        </tbody>
      </table>
    </>
  )
}

export default TableList
