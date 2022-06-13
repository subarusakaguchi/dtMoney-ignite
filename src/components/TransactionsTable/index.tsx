import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('/transactions').then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 900,00</td>
                        <td>MindBlow.dev</td>
                        <td>05/06/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 700,00</td>
                        <td>Casa</td>
                        <td>07/06/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 1.100,00</td>
                        <td>MindBlow.dev</td>
                        <td>08/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}