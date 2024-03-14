'use client'

import React, { useState } from 'react'
import { Box } from '@mui/material'
import GetData from '@/shared/lib/GetData'
import cls from './styles.module.scss'
import { Option } from '@/shared/ui/MultiSelect'
import FilterPanel from './filterPanel'
import CarTable from './carTable'

interface FilterType {
  brand: string | null
  model: string | null
  selectedTypes: Option[]
  selectedShops: Option[]
}

const AutoLayout = () => {
  const dataCars = GetData()
  const [filteredCars, setFilteredCars] = useState(dataCars)

  const arrBrand = Array.from(new Set(dataCars.map(elem => elem.make)))
  const arrBrandWithOptions = arrBrand.map(brand => ({
    value: brand,
    label: brand.toLowerCase()
  }))
  const arrTypes = Array.from(new Set(dataCars.map(elem => elem.type)))
  const arrTypesWithOptions = arrTypes.map(type => ({
    value: type,
    label: type.toLowerCase()
  }))

  const handleFilterChange = (filters: FilterType) => {
    let filteredData = dataCars

    if (filters.brand) {
      filteredData = filteredData.filter(car => car.make === filters.brand)
    }

    if (filters.model) {
      filteredData = filteredData.filter(car => car.model!.toLowerCase().includes(filters.model!.toLowerCase()))
    }    

    if (filters.selectedTypes.length > 0) {
      const selectedTypeValues = filters.selectedTypes.map(type => type.value)
      filteredData = filteredData.filter(car => selectedTypeValues.includes(car.type))
    }

    setFilteredCars(filteredData)
    console.log(filteredData)
    
  }

  return (
    <div>
      <FilterPanel
        brands={arrBrandWithOptions}
        types={arrTypesWithOptions}
        onFilterChange={handleFilterChange}
      />
      <Box className={cls.cars_wrapper}>
        <CarTable cars={filteredCars} />
      </Box>
    </div>
  )
}

export default AutoLayout