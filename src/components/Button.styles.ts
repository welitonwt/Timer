import  styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',  
  secondary: 'orange',  
  danger: 'red',  
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 200px;
  height: 60px;
  font-size: 1.2rem;
  ${props => {
    return css`
      background: ${buttonVariants[props.variant]}
    `
  }}
`