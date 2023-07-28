import { FC, useMemo } from 'react'
import * as S from './styles'
import { useStore } from 'effector-react'
import { $globalStore, globalEvents } from '../../store'
import { Section } from '../Section'

export const Target: FC = () => {
  const { sum } = useStore($globalStore)

  const items = useMemo(() => Object.values(sum || []), [sum])
  const total = useMemo(() => items.reduce((prev, curr) => prev + curr, 0), [items])

  const add = () => {
    globalEvents.setSumItem({
      [items.length]: 0
    })
  }

  return (
    <Section>
      <h4>Somatório</h4>
      {items.map((item, key) => (
        <S.Item key={key}>
          <S.DeleteButton onClick={() => globalEvents.removeSumItem(key)}>X</S.DeleteButton>
          <S.Input
            type="number"
            value={item}
            onChange={(e) =>
              globalEvents.setSumItem({
                [key]: +e.target.value
              })
            }
          />
        </S.Item>
      ))}
      <S.Total>
        <span>Total:</span>
        <b>{total.toFixed(2)}</b>
      </S.Total>
      <S.AddButton onClick={add}>Add</S.AddButton>
    </Section>
  )
}
