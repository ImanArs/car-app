'use client'

import React, { useState } from 'react'
import { Rating, Button, Card } from '@mui/material'

import { CarsType } from '@/shared/consts/carsType'
import cls from './styles.module.scss'

interface Props {
  car: CarsType
}
export const CarCard = (props: Props) => {
  const { car } = props

  const [value, setValue] = useState(0)

  return (
    <Card className={cls.card}>
      <img src={car.image} alt="Car" />

      <div className={cls.wrapper}>
        <h2>name: {car.make} {car.model}</h2>
        <h2>type: {car.type}</h2>
        <span>50000$</span>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue(newValue);
            }
          }}
        />
      </div>
      
      <Button variant="contained" href={`/auto/${car.id}`} className={cls.go_btn}>
        Перейти
      </Button>
      <button className={cls.add_fav_btn}>+</button>
    </Card>
  )
}
