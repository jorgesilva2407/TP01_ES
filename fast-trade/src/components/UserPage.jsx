import React, { useState } from 'react';

function UserPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Meus Pedidos');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="user-page">
      <div className="side-menu">
        <ul>
          <li
            onClick={() => handleMenuItemClick('Meus Pedidos')}
            className={selectedMenuItem === 'Meus Pedidos' ? 'active' : ''}
          >
            Meus Pedidos
          </li>
          <li
            onClick={() => handleMenuItemClick('Informações da Conta')}
            className={selectedMenuItem === 'Informações da Conta' ? 'active' : ''}
          >
            Informações da Conta
          </li>
          <li
            onClick={() => handleMenuItemClick('Formas de Pagamento')}
            className={selectedMenuItem === 'Formas de Pagamento' ? 'active' : ''}
          >
            Formas de Pagamento
          </li>
          <li
            onClick={() => handleMenuItemClick('Endereços')}
            className={selectedMenuItem === 'Endereços' ? 'active' : ''}
          >
            Endereços
          </li>
          <li
            onClick={() => handleMenuItemClick('Settings')}
            className={selectedMenuItem === 'Settings' ? 'active' : ''}
          >
            Settings
          </li>
        </ul>
      </div>
      <div className="content">
        {selectedMenuItem === 'Meus Pedidos' && (
          <div>
            Meus Pedidos Content
          </div>
        )}
        {selectedMenuItem === 'Informações da Conta' && (
          <div>
            Informações da Conta Content
          </div>
        )}
        {selectedMenuItem === 'Formas de Pagamento' && (
          <div>
            Formas de Pagamento Content
          </div>
        )}
        {selectedMenuItem === 'Endereços' && (
          <div>
            Endereços Content
          </div>
        )}
        {selectedMenuItem === 'Settings' && (
          <div>
            Settings Content
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPage;
