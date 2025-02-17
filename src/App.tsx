import { useState } from 'react'
import Header from './components/Header'
import './styles/App.css'
import useGetBoardingPasses from './hooks/useGetBoardingPasses'
import MainSection from './components/MainSection'

function App() {
  const [boardingPassIndex, setboardingPassIndex] = useState(0)
  const { data } = useGetBoardingPasses()

  const showNextBoardingPass = () => {
    const nextBoardingPassIndex = (boardingPassIndex + 1) % data.length
    setboardingPassIndex(nextBoardingPassIndex)
  }

  return (
    <div id="container">
      <Header showNextBoardingPass={showNextBoardingPass} />
      <MainSection boardingPassIndex={boardingPassIndex} data={data} />
      <div id="footer">footer</div>
    </div>
  )
}

export default App
