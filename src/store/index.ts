import * as globalEvents from './events'
import { persist } from 'effector-storage/local'
import { createStore } from 'effector'
import { IGlobalStore } from './types'
import { addMonths } from 'date-fns'

const storeKey = 'adfSaj5dfl9gb@pd8jg8kl'

export { globalEvents }

export const globalDefaultState: IGlobalStore = {
  sum: {
    0: 0
  },
  amount: 0,
  selectionRange: {
    startDate: new Date(),
    endDate: addMonths(new Date(), 1),
    key: 'selection',
    color: '#4caf50'
  }
}

export const $globalStore = createStore<IGlobalStore>(globalDefaultState)

persist({ store: $globalStore, key: storeKey })

$globalStore
  .on(globalEvents.setSelectionRange, (state, selectionRange) => ({
    ...state,
    selectionRange
  }))
  .on(globalEvents.setAmount, (state, amount) => ({
    ...state,
    amount
  }))
  .on(globalEvents.setSumItem, (state, sum) => ({
    ...state,
    sum: {
      ...state.sum,
      ...sum
    }
  }))
  .on(globalEvents.removeSumItem, (state, key) => {
    const copy = { ...state.sum }
    delete copy[key]
    const sum = Object.values(copy).reduce(
      (prev, curr, index) => ({
        ...prev,
        [index]: curr
      }),
      {}
    )
    return {
      ...state,
      sum
    }
  })
  .reset(globalEvents.reset)
