import { CarsType } from '@/shared/consts/carsType'
import GetData from '@/shared/lib/GetData'
import React from 'react'
import cls from './styles.module.scss'
import { Box, Button, Card } from '@mui/material'
import Link from 'next/link'

export const FilterByName = async () => {
  const data: CarsType[] =  GetData()

  const getCarsMark = function (car: CarsType) {
    const filtered = data.filter(carSearch => carSearch.make === car.make)
    return filtered.length
  }

  return (
    <div className={cls.filter}>
      <div className={cls.filter_wrapper}>
        <div className={cls.logo_wrapper}>
          {data.map(car => (
            <Box key={car.id} className={cls.logo_card}>
              <img src={car.logo} alt="" />
            </Box>
          ))}
        </div>
        <div>
          <ul className={cls.mark_wrapper}>
          {data.map(car => {
            const numberCars = getCarsMark(car)
            return (
                <li key={car.id} className={cls.mark_card}>
                  {car.make}
                  <span>({numberCars})</span>  
                </li>
              )
            })}
            </ul>
        </div>
        <Link href='/auto'>
          <Button className={cls.button} variant='outlined'>Перейти к машинам ({data.length})</Button>
        </Link>
      </div>
    </div>
  )
}
