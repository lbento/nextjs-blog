import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { CustomFormControl } from './styles';
import InputErrorMessage from '../inputerrormessage';

const CustomSelect: React.FC<any> = ({ name, ...rest }) => {
    const [selected, setSelected] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelected(event.target.value as string);
    };
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (!ref.node.value) {
          return '';
        }
        return ref.node.value;
      },
    });
  }, [fieldName, registerField]);
  return (
      <>
        <CustomFormControl variant="outlined" fullWidth>
            <InputLabel>{rest.placeholder}</InputLabel>
            <Select
                defaultValue={defaultValue}
                inputRef={selectRef}
                value={selected}
                error={error ? true : false}
                onChange={handleChange}
                label={rest.placeholder}
                >
                {rest.options.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
            </Select>
            
        </CustomFormControl>
        { error && <InputErrorMessage>{error}</InputErrorMessage>  }
    </>
  );
};
export default CustomSelect;