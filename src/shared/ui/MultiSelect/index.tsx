import React, { useState } from 'react';
import { Box, Chip, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import cls from './styles.module.scss'

export interface Option {
  value: string;
  label: string;
}

interface CustomMultiSelectProps {
  options: Option[];
  selected: Option[];
  onChange: (selected: Option[]) => void;
}

export const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({ options, selected, onChange }) => {
  const [selectedCount, setSelectedCount] = useState(selected.length);

  const handleChange = (event: any) => {
    const selectedValues = event.target.value.map((value: any) => options.find(option => option.value === value) || { value: '', label: '' });
    onChange(selectedValues);
    setSelectedCount(selectedValues.length);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Select
        multiple
        className={cls.multiselect}
        value={selected.map(option => option.value)}
        onChange={handleChange}
        renderValue={(selected) => {
          const firstSelectedValue = selected[0];
          const firstSelectedLabel = options.find(option => option.value === firstSelectedValue)?.label;
          return (
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {firstSelectedValue && (
                <Chip
                  key={firstSelectedValue}
                  variant="outlined"
                  color="primary"
                  label={firstSelectedLabel || ''}
                />
              )}
              {
                selectedCount > 1 && (
                  <Box ml={1}>(+{selectedCount - 1})</Box>
                )
              }
              {!Boolean(selectedCount)  && (
                <Box ml={1}>select some</Box>
              )}
            </Box>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      
    </Box>
  );
};
