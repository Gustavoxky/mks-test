import React from 'react';
import './Empty.scss';

interface EmptyProps {
  message: string;
}

const Empty: React.FC<EmptyProps> = ({ message }) => {
  return (
    <div className="empty-container">
      <div className="empty-content">
        <p className="empty-message">{message}</p>
      </div>
    </div>
  );
};

export default Empty;
