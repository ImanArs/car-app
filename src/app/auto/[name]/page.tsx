'use client'

import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import GetData from '@/shared/lib/GetData'
import { usePathname } from 'next/navigation'
import cls from './styles.module.scss'
import { Card, Rating } from '@mui/material'
import HomeForm from '@/features/HomePage/form'

const AutoDetails = () => {
  const router = usePathname()
  const carId = router.split('/').slice(-1).join()
  
  const carsData = GetData()
  const car = carsData.find(car => car.id === Number(carId))
  console.log(car)
  
  if (!car) {
    return <div>Car not found</div>
  }
  
  const resellerIds: { [key: string]: number } = {}
  let idCounter = 0

  car.sales.forEach((sale) => {
    if (!(sale.date in resellerIds)) {
      resellerIds[sale.date] = idCounter
      idCounter++
    }
  })
  // функция которая добавляет каждый элемент как комплект пары ключ значение где елюч это idCounter = date а значение = 0
  console.log(resellerIds)


  const xAxisCommon = {
    data: Object.keys(resellerIds).map(date => resellerIds[date]),
    scaleType: 'linear' as const, // или 'linear'
    valueFormatter: (index: any) => Object.keys(resellerIds)[index],
  };

return (
  <div className={cls.root}>
    
  <div className={cls.left}>
    
    <Card className={cls.card}>
      <img src={car.image} alt="Car" />

      <div className={cls.wrapper}>
        <h2>name: {car.make} {car.model}</h2>
        <h2>type: {car.type}</h2>
        <span>50000$</span>
        <Rating
          name="simple-controlled"
          value={3}
        />
      </div>
      <button className={cls.add_fav_btn}>+</button>
    </Card>
    <div className={cls.linechart}>
      Количество продаж {car.make}{car.model}{car.type}
      <LineChart
        xAxis={[xAxisCommon]}
        series={[
          {
            data: car.sales.map(() => 1),
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  </div>
  <HomeForm />
  </div>
)
}

export default AutoDetails
