import styled from '@emotion/styled'

export const Form = styled.form`
  border: 0.1rem solid lightgray;
  display: inline-flex;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: white;
`

export const Input = styled.input`
  border: none;
  font-size: 1.6rem;
  background: transparent;
  padding: 1.5rem;
`

export const Button = styled.button`
  border: none;
  background: #0095ff;
  color: white;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;

  &:disabled {
    opacity: 0.6;
  }
`

export const ThankYou = styled.span`
  font-weight: bold;
  color: purple;
`
