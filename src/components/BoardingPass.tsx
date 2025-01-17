import { BoardingPassInfo } from '../types'

export default function BoardingPass({
  boardingPass,
}: {
  boardingPass?: BoardingPassInfo
}) {
  return (
    <div id="boardingPass">
      {!boardingPass && <>loading</>}
      {boardingPass && boardingPass.airlineName}
    </div>
  )
}
