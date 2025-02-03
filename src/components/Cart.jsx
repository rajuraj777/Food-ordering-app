import { useSelector, useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { clearCart ,removeItem} from "../utils/CartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((store) => store?.cart?.items);
   const [quantities, setQuantities] = useState(cartItems?.map(() => 1));
   const [total, setTotal] = useState(0);
   
   
   useEffect(() => {
      const newTotal = cartItems?.reduce((acc, item, index) => {
         return acc + item?.card?.info?.price * quantities[index];
      }, 0);
      setTotal(newTotal);
   }, [cartItems, quantities]);

   const handleQuantityChange = (index, newQuantity) => {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantity;
      setQuantities(newQuantities);
   };
   const showNotificationMessage = (message) => {
      toast.success(message);
   };

   const remove = (index) => {
      dispatch(removeItem(index));
      showNotificationMessage("Item removed from cart.");
   };

   const clear = () => {
      dispatch(clearCart());
      showNotificationMessage("Cart cleared.");
   };
   const handleCheckout=()=>{
      showNotificationMessage("Order Placed.");
   }
   return (
      <div className="tw-container tw-mx-auto tw-p-4">
         <h1 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-center">Your Cart</h1>
         <div className="tw-grid tw-gap-6">
            {
               (cartItems?.length === 0 || cartItems===undefined) ? (
                  <div className="tw-text-center tw-text-gray-500">Your cart is empty.</div>
               ) : (
                  cartItems?.map((item, i) => (
                     <div key={i} className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-flex tw-p-4 tw-items-center tw-flex-col md:tw-flex-row">
                        <img src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} className="tw-w-20 tw-h-20 tw-object-cover tw-rounded-lg" />
                        <div className="tw-flex-grow tw-ml-0 md:tw-ml-4 tw-mt-4 md:tw-mt-0">
                           <h2 className="tw-text-xl tw-font-semibold">{item?.card?.info?.name}</h2>
                           <div className="tw-flex tw-items-center tw-mt-2">
                              <input type="number" min="1" value={quantities[i]} onChange={(e) => handleQuantityChange(i, Math.max(1, parseInt(e.target.value) || 1))} className="tw-w-16 tw-border tw-rounded tw-mx-2 tw-text-center" />
                              <h2 className="tw-text-lg tw-font-medium tw-text-gray-700 tw-ml-4">₹{item?.card?.info?.price * quantities[i]}</h2>
                           </div>
                        </div>
                        <button onClick={() => remove(i)} className="tw-bg-red-500 tw-text-white tw-rounded tw-py-1 tw-px-2 tw-mt-4 md:tw-mt-0 md:tw-ml-4 tw-border-none tw-w-full sm:tw-w-5/6 md:tw-w-1/6 lg:tw-w-1/12 md:tw-max-w-32" >Remove</button>
                     </div>
                  ))
               )
            }
         </div>
         {
            cartItems?.length > 0 && (
               <div className="tw-mt-6">
                  <div className="tw-flex tw-justify-between tw-text-lg tw-font-bold tw-mb-4">
                     <div>
                        <span className="tw-mr-2">Total:</span> 
                        <span>₹{total}</span>
                     </div>
                     <button onClick={clear} className="tw-bg-red-500 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-border-none tw-w-40 sm:tw-w-56">Clear Cart</button>
                  </div>
                  <div className="tw-flex tw-justify-center">
                     <button className="tw-bg-green-600 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-border-none tw-w-full md:tw-w-2/3 lg:tw-w-1/3" onClick={()=> handleCheckout()}>Proceed to Checkout</button>
                  </div>
               </div>
            )
         }
      </div>
   )
}

export default Cart;
