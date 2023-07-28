import { FC, useMemo } from 'react'
import { DateRange } from 'react-date-range'
import { ptBR } from 'date-fns/locale'
import { Input } from '../Input'
import * as S from './styles'
import { useStore } from 'effector-react'
import { $globalStore, globalEvents } from '../../store'
import { differenceInCalendarWeeks, differenceInDays } from 'date-fns'
import { round2Decimals } from '../../utils/number'
import { Section } from '../Section'

export const AmountVisualization: FC = () => {
  const { amount, selectionRange } = useStore($globalStore)

  const ranges = useMemo(
    () => [
      { ...selectionRange, startDate: new Date(selectionRange.startDate!), endDate: new Date(selectionRange.endDate!) }
    ],
    [selectionRange]
  )

  const weeksCount = 1 + differenceInCalendarWeeks(ranges[0].endDate, ranges[0].startDate)
  const daysCount = 1 + differenceInDays(ranges[0].endDate, ranges[0].startDate)

  const calcPerWeek = () => {
    if (!amount) {
      return 0
    }
    return round2Decimals(amount / weeksCount)
  }

  const calcPerDay = () => {
    if (!amount) {
      return 0
    }
    return round2Decimals(amount / daysCount)
  }

  return (
    <Section>
      <h4>Gastos</h4>
      <S.InputGroup>
        <Input type="number" value={amount || ''} onChange={(e) => globalEvents.setAmount(+e.target.value)} />
      </S.InputGroup>
      <S.AmountGroup>
        <S.AmountItem>
          <div>Total</div>
          <div className="text">{amount}</div>
        </S.AmountItem>
        <S.AmountItem>
          <div>Por semana ({weeksCount}x)</div>
          <div className="text">{calcPerWeek()}</div>
        </S.AmountItem>
        <S.AmountItem>
          <div>Por dia ({daysCount}x)</div>
          <div className="text"> {calcPerDay()}</div>
        </S.AmountItem>
      </S.AmountGroup>
      <DateRange
        weekdayDisplayFormat="EEEEEE"
        locale={ptBR}
        ranges={ranges}
        months={2}
        onChange={(item) => {
          globalEvents.setSelectionRange(item.selection)
        }}
      />
    </Section>
  )
}
