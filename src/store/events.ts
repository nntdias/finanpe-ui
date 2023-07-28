import { createEvent } from 'effector'
import { Range } from 'react-date-range'

export const reset = createEvent('reset')

export const setSelectionRange = createEvent<Range>('setSelectedRange')

export const setAmount = createEvent<number>('setAmount')

export const setSumItem = createEvent<Record<number, number>>('setSumItem')

export const removeSumItem = createEvent<number>('removeSumItem')
