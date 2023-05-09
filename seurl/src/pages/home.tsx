import {
  Menu,
  Inicio,
  Principal,
  Vantagem,
  Responsividade,
  Contato,
  Footer
} from '../components'

import { api } from '../lib/axios'

export function Home() {
  return (
    <>
      <Menu />
      <Inicio />
      <Principal api={api}/>
      <Vantagem />
      <Responsividade />
      <Contato />
      <Footer />
    </>
  )
}

