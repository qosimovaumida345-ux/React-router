import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Sahifa topilmadi</h2>
        <p className="not-found-text">
          Siz qidirayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <div className="not-found-buttons">
          <button onClick={() => navigate(-1)} className="btn-back">
            Orqaga qaytish
          </button>
          <button onClick={() => navigate('/')} className="btn-home">
            Bosh sahifaga
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
