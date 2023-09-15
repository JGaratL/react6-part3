import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case 'success':
        return 'background-color: #28a745; color: white;';
      case 'error':
        return 'background-color: #dc3545; color: white;';
      case 'warning':
        return 'background-color: #ffc107; color: black;';
      case 'info':
        return 'background-color: #17a2b8; color: white;';
      default:
        return 'background-color: #6c757d; color: white;';
    }
  }}

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export default StyledButton;