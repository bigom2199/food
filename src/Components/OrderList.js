
function OrderList({incrementQuantity,decrementQuantity}){
   
    const calculateTotal = () => {
          return  orderItems.reduce(
        (total,item) =>total + item.price*item.quantity,0 );
          }
          return (
            <div
             className=" fixed-bottom bg-light p-1 m-4">
              <h3>order List</h3>
              <table className="table table-hover"></table>
              <thead>
                <tr>
                  <th>Item </th>
                  <th> Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
                </thead>
                <table>
                <tbody>
                {orderItems.map((item,index) => (
                  <tr key={index}>
                <td>{item.title}  </td>
                <td>
                  <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decrementQuantity(item)}
                  >
                    
                   
                  </button>
                  <span style={{ marginRight:"6px",maraginLeft:"6px"}}>
                   {item.quantity}
    
                  </span>
                    <button className="btn btn-outline-sucess btn-sm"
                    onClick={() => incrementQuantity(item)}
                    >
                      
                      
                    </button>
                </td>
                 <td>SEK{item.price.toFixed(2)} </td>
                 <td>SEK {(item.price*item.quantity).toFixed(2)} </td>
                  </tr>
              ))}
              <tr>   
               <td colSpan="3" className="font-weight-bold text-right">
                   Total:
               </td>
               <td className="font-weight-bold">
                SEK{calculateTotal(orderItems).toFixed(2)}
               </td>
                </tr>
                </tbody> 
                </table>
                </div>
          )
       
      }
      export default OrderList;