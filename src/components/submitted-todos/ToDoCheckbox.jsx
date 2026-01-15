import Checkbox from '@mui/material/Checkbox'
import CircleChecked from '@mui/icons-material/CheckCircleOutline'
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked'



export const ToDoCheckbox = ({ checked, onChange }) => {
  return (
    <Checkbox
      icon={<CircleUnchecked />}
      checkedIcon={<CircleChecked />}
      sx={{ color: '#15616d', '&.Mui-checked': { color: '#4caf50' }, alignSelf: 'baseline' }}
      checked={checked}
      onChange={onChange}
    />
  )
}

