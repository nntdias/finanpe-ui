import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { FC } from 'react'
import GlobalStyle from './Global.style'
import * as S from './App.style'
import { AmountVisualization } from './components/AmountVisualization'
import { Target } from './components/Target'

const App: FC = () => (
  <S.Wrapper>
    <GlobalStyle />
    <S.Container>
      <Target />
      <AmountVisualization />
    </S.Container>
  </S.Wrapper>
)

export default App
