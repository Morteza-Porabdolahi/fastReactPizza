import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-4">
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button>
      <span className="font-medium text-sm">{currentQuantity}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))} type='round'>+</Button>
    </div>
  )
}
