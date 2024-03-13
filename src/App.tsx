import { useState } from "react"
import TimeZoneClock from "./components/TimeZoneClock"

const App = () => {

  const timeZones: string[] = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Sao_Paulo",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo"
  ]

  const localTimeZone: any = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZoneSelected, setTimeZoneSelected] = useState<any[]>([
    localTimeZone
  ])

  const addTimeZone = (e: any) => {
    const newTimeZone = e.target.value
    if (!timeZoneSelected.includes(newTimeZone)) {
      setTimeZoneSelected([...timeZoneSelected, newTimeZone])
    }
  }


  return (
    <div className="bg-white">
      <div className="bg-black font-oswald flex flex-col justify-center content-center items-center py-4 md:mx-96 md:my-12 rounded-md">
        <div className="py-6">
          <h1 className="text-6xl md:text-7xl text-white text-center">World Clock</h1>
          <h1 className="text-xl md:text-2xl text-white text-center">Powered by <a className="underline" href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Marcelo Zuza</a></h1>
        </div>

        <div className="">
          <select className="px-2 py-1 text-xl rounded-sm" onChange={(e) => addTimeZone(e)}>
            <option value="">
              Select a time zone
            </option>
            {timeZones.map((tZ: string) => (<option key={tZ} value={tZ}>{tZ}</option>))}
          </select>
        </div>
        <div className="py-4">
          {timeZoneSelected.map((tZ: string ) => (<TimeZoneClock key={tZ} timeZone={tZ} />)) }
        </div>
      </div>
    </div>
  )
}

export default App