import './ui-input-search.scss';
import React, { FC } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames';
import { IProps } from '@/types/common';

interface IUiSearchInputProps extends IProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: VoidFunction;
  placeholder?: string;
}

export const UiSearchInput: FC<IUiSearchInputProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Поиск бренда, товара, категории...',
  className,
  ...props
}) => {
  return (
    <TextField
      {...props}
      className={classNames('ui-input-search', className)}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        sx: { borderRadius: '36px', border: '1px solid #F0F4FB' },
        endAdornment: (
          <InputAdornment className="ui-input-search__input-adornment" position="end">
            <IconButton className="ui-icon-button ui-input-search__button" onClick={onSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
