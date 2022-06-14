import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal';
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    const [tittle, setTittle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory]= useState('');

    const { createTransaction } = useTransactions();

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            tittle,
            amount,
            type,
            category
        };

        await createTransaction(data);

        onRequestClose();
        setTittle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar janela de cadastro" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                    placeholder="Título"
                    value={tittle}
                    onChange={event => setTittle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        isActive={type === 'deposit'}
                        onClick={() => setType('deposit')}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => setType('withdraw')}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button 
                    type="submit"
                >
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}