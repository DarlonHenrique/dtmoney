import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onCloseNewTransactionModal: () => void
}

export function NewTransactionModal({
  isOpen,
  onCloseNewTransactionModal
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      onRequestClose={onCloseNewTransactionModal}
    >
      <button type='button' className='react-modal-close' onClick={onCloseNewTransactionModal}>
        <img src={closeImg} alt='fechar modal' />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Título' />
        <input placeholder='Valor' type='number' />
        <TransactionTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </button>

          <button type='button'>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder='Categoria' />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
