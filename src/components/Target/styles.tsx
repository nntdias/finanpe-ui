import { styled } from 'styled-components'
import { Input as InputComponent } from '../Input'

export const Item = styled.div`
  padding-bottom: 0.25rem;
  display: flex;
  gap: 0.25rem;
`

export const Input = styled(InputComponent)`
  text-align: right;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  background: #849095;
  color: white;
  border: 1px solid whitesmoke;
  border-radius: 0.25rem;
`

export const AddButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  background: #4caf50;
  color: white;
  border: 1px solid whitesmoke;
  border-radius: 0.25rem;
`

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 0.5rem;
  padding: 0.5rem;
`
