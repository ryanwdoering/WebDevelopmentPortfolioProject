import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(prev => prev < 10 ? prev + 1 : 10);
  const decrease = () => setQuantity(prev => prev > 0 ? prev - 1 : 0);

  return (
    <div>
      <AiOutlineMinus onClick={decrease} />
      {quantity}
      <AiOutlinePlus onClick={increase} />
    </div>
  );
}

export default ProductQuantity;
