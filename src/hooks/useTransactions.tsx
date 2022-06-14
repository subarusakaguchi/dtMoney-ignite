import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface ITransaction {
    id: number;
    tittle: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

interface ITransactionsProviderProps {
    children: ReactNode;
}

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<ITransactionsContextData>(
    {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', JSON.stringify(transactionInput));

        const { transaction } = response.data;

        setTransactions((oldTransactions) => [...oldTransactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            { children }
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}