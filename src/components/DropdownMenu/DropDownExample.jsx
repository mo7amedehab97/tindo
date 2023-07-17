import DropdownMenu from './DropdownMenu'
import MenuItem from './MenuItem'

const DropDownExample = () => {
    const handleSelect = (value) => {
        console.log('Selected value:', value);
      };
  return (
    <DropdownMenu onSelect={handleSelect}>
    <MenuItem value="Item 1">Item 1</MenuItem>
    <MenuItem value="Item 2">Item 2</MenuItem>
    <MenuItem value="Item 3">Item 3</MenuItem>
  </DropdownMenu>
  )
}

export default DropDownExample