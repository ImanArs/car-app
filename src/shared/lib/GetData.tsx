import React from 'react'
import dataCars from '@/shared/api/api.json'
import { CarsType } from '../consts/carsType'

export default function GetData () {
  const data: CarsType[] = JSON.parse(JSON.stringify(dataCars))
  
  return data
}
