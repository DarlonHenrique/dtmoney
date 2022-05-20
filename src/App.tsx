import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTranactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTranactionModal} />
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Testando modal</h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}
