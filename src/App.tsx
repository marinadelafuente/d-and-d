import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import TableList from './components/TableList'
import Header from './components/Header'
import useSpells from 'hooks/useSpells'
import ErrorPage from 'pages/ErrorPage'

function App() {
  const [level, setLevel] = useState<string>(location.hash.substring(1))

  const [spells, spellsError] = useSpells(
    location.hash ? location.hash.substring(1) : '0'
  )
  const navigate = useNavigate()

  if (spellsError) {
    return <ErrorPage error={spellsError} />
  }

  if (!spells) {
    return <div>Loading ...</div>
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(ev.target.value)
    navigate(`#${ev.target.value}`)
  }
  return (
    <>
      <Header {...{ handleChange }} />
      <div className="m-12 flex pb-10">
        <TableList {...{ spells }} />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default App
