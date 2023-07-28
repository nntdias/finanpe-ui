import { styled } from 'styled-components'

export const InputGroup = styled.div`
  padding-bottom: 20px;
  padding-top: 10px;
`

export const AmountGroup = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
`

export const AmountItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  font-size: 16px;

  &:not(:first-child) {
    margin-top: 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`
