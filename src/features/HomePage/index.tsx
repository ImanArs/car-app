import GetData from "@/shared/lib/GetData";
import { CarCard } from "@/shared/ui/CarCard";
import { FilterByName } from "@/shared/ui/filtersByName";
import { Box, Grid } from "@mui/material";
import React from 'react'
import cls from './styles.module.scss'
import HomeForm from "./form";

export const HomePage = () => {
  const carsData = GetData()
  return (
    <div className={cls.root}>
      <div className={cls.filter}>
        <FilterByName />
        {/* <Box className={cls.ad_block}>
          <img src="https://img.myloview.ru/posters/cute-funny-fox-mascot-vector-illustration-isolated-cartoon-character-for-children-books-400-118139282.jpg" alt="" />
          <h2>Оставьте свои коментарии или пожелания к нам</h2>
        </Box> */}
        <HomeForm />
      </div>
      <Box className={cls.cars_wrapper}>
        {carsData.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </Box>
    </div>
  )
}
