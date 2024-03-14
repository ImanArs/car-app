import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import Link from 'next/link';
import { CarsType } from '@/shared/consts/carsType';

interface Props {
  cars: CarsType[]
}

const CarTable = ({ cars }: Props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Марка</TableCell>
          <TableCell>Модель</TableCell>
          <TableCell>Тип</TableCell>
          <TableCell>Картинка</TableCell>
          <TableCell>Продано всего</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cars.map((car: CarsType) => (
          <TableRow key={car.id}>
            <TableCell>{car.id}</TableCell>
            <TableCell>{car.make}</TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.type}</TableCell>
            <TableCell><img width={30} src={car.logo} alt="" /></TableCell>
            <TableCell>{car.sales.length}</TableCell>
            <TableCell><Button><Link href={`/auto/${car.id}`}>Перейти</Link></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarTable;
