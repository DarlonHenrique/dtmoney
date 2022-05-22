import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTranactionModal} />
      <Dashboard />
      <NewTransactionModal
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
