import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          tittle: 'Desenvolvimento de Web Site',
          type: 'deposit',
          category: 'dev',
          amount: 900,
          createdAt: new Date('2022-05-24 10:00:00')
        },
        {
          id: 2,
          tittle: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1100,
          createdAt: new Date('2022-05-24 12:00:00')
        },
        {
          id: 3,
          tittle: 'Manutenção web site',
          type: 'deposit',
          category: 'dev',
          amount: 300,
          createdAt: new Date('2022-05-28 14:00:00')
        },
        {
          id: 4,
          tittle: 'Jantar',
          type: 'withdraw',
          category: 'ifood',
          amount: 126.55,
          createdAt: new Date('2022-05-28 22:30:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => { 
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      data.createdAt = new Date();

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
