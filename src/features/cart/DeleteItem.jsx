import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';

import { deleteItem } from './cartSlice';

export const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  
  return (
    <Button type="small" onClick={handleDeleteItem}>Delete</Button>
  )
}

