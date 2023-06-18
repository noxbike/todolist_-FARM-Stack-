import React, { useState } from 'react'
import WeeklyGoal from './weeklyGoal/WeeklyGoal'
import Chart from './chart/Chart'
import EditGoal from './editGoal/EditGoal'

export default function Statistique() {
  const [view, setView] = useState(false)
  return (
    <div>
        <WeeklyGoal view={view} setView={setView}/>
        {!view && <Chart/>}
        {view && <EditGoal/>}
    </div>
  )
}
