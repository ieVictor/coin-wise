import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from '@mui/material';
import styles from './styles.module.css';
import { Rows, TablePaginationProps } from './types';

export default function TablePagination(props: TablePaginationProps) {
  return (
    <div className={styles.paginationWrapper}>
      <p>
        Showing <strong>1 to {props.rows}</strong> of{' '}
        <strong>{props.itens}</strong> results
      </p>
      <Pagination
        onChange={(_event, page) => props.onPageChange(page)}
        count={Math.ceil((props.itens || props.rows) / props.rows)}
        size="medium"
        color="primary"
        variant="outlined"
        shape="circular"
        hideNextButton
        hidePrevButton
      />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="rows-select-label">Rows</InputLabel>
        <Select
          labelId="rows-select-label"
          label="Rows"
          id="rows-select"
          autoWidth
          value={props.rows}
          onChange={(event) =>
            props.onRowsChange(Number(event.target.value) as Rows)
          }
          size="small"
        >
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
