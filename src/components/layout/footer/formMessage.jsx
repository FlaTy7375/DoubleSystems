'use client';

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; 
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  padding-top: 50px;
  z-index: 1000;
  animation: ${props => (props.$message ? fadeIn : fadeOut)} 0.3s forwards;
  pointer-events: ${props => (props.$message ? 'auto' : 'none')}; 
`;

const ModalContent = styled.div`
  background: ${props => (props.$isSuccess ? '#28a745' : '#dc3545')};
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export default function ModalMessage({ message, onClose, duration = 5000 }) {
    
    const isSuccess = message.toLowerCase().includes('успешно') || message.toLowerCase().includes('sending...');

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [message, onClose, duration]);

    if (!message) {
        return null;
    }

    return (
        <ModalOverlay $message={message} onClick={onClose}>
            <ModalContent $isSuccess={isSuccess} onClick={e => e.stopPropagation()}>
                {message}
            </ModalContent>
        </ModalOverlay>
    );
}