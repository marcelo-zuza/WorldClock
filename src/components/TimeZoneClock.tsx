import { useEffect, useState } from "react"

interface TimeZoneClockProps {
    timeZone: string
}

const TimeZoneClock = (props: TimeZoneClockProps) => {
    const [time, setTime] = useState<string>('')

    useEffect(() => {
        setInterval(() => {
            const date = new Date
            const options: Intl.DateTimeFormatOptions = {
                timeZone: props.timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
            const timeString = date.toLocaleTimeString('en-US', options)
            setTime(timeString)
        }, 1000)
    }, [props.timeZone])

  return (
    <div className="bg-gray-200 rounded-md p-2 my-4">
        <h2 className="text-2xl text-center font-bold">{props.timeZone}</h2>
        <h3 className="text-2xl text-center">{time}</h3>
    </div>
  )
}

export default TimeZoneClock