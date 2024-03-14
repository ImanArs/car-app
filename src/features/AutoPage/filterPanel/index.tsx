'use client'

import React, { ChangeEvent, useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';
import { CustomMultiSelect, Option } from '@/shared/ui/MultiSelect';
import cls from './styles.module.scss'

interface FilterPanelProps {
  brands: Option[];
  types: Option[];
  onFilterChange: (filters: FilterType) => void;
}

interface FilterType {
  brand: string | null;
  model: string | null;
  selectedTypes: Option[];
  selectedShops: Option[];
}

const FilterPanel = ({ brands, types, onFilterChange }: FilterPanelProps) => {
  const [brand, setBrand] = useState<string | null>('');
  const [model, setModel] = useState<string | null>('');
  const [selectedTypes, setSelectedTypes] = useState<Option[]>([]);
  const [selectedShops, setSelectedShops] = useState([]);

  const handleBrandChange = (event: ChangeEvent<{ value: string }>) => {
    if (event.target.value === 'all') {
      setBrand(null);
    } else {
      setBrand(event.target.value);
    }
  };

  const handleModelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel(event.target.value);
  };

  const handleTypeChange = (selected: Option[]) => {
    setSelectedTypes(selected);
  };

  const handleApplyFilters = () => {
    onFilterChange({
      brand,
      model,
      selectedTypes,
      selectedShops
    });
  };

  return (
    <Box className={cls.filters}>
      <div className={cls.select}>
        Марка автомобиля
        <TextField
          select
          label="Марка автомобиля"
          value={brand}
          onChange={handleBrandChange}
        >
          {[{value: 'all', label: 'all'},...brands].map((brand) => (
            <MenuItem key={brand.value} value={brand.value}>
              {brand.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={cls.select}>
        Модель
        <TextField
          label="Модель"
          value={model}
          onChange={handleModelChange}
        />
      </div>

      <div className={cls.select}>
        Тип
        <CustomMultiSelect
          options={types}
          selected={selectedTypes}
          onChange={handleTypeChange}
        />
      </div>
      <Button onClick={handleApplyFilters}>Применить</Button>
    </Box>
  );
};

export default FilterPanel;
