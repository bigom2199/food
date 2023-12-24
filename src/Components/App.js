import burgerImg from "./images/burger.js";
import pizzaImg from "./images/pizza.js";

import icecreamImg from "./images/iceCream.js";
import OrderList from "./OrderList.js";
import { useEffect,useState } from "react";


function App() {
    const menuItem = [
        {
            title: " pizza",
            description:"A classic pizza with tomato.",
            image:pizzaImg,
            price:99.99,
        },

    {
        title:"Burger",
        description:"A delicious burger with all the fixings.",
        image:burgerImg,
        price:79.99,
    },
    {
        title:"Ice Cream",
        description:" A vanilla ice cream. ",
        image:icecreamImg,
        price:24.99,
    }
    ]
      const [orderItems,setOrderItems] = useState([]);
      const[darkMode,setDarkMode] =useState();
      const toggleModeHandler = () => {
        setDarkMode(!darkMode);
      }
           const addToOrder= () => {
           const existingItem = orderItems.find()
              item.title === menuItem.title
          }
    
              const incrementQuantity = () =>  {
              const updateOrder = orderItems.map((item) => item.title === menuItem.title ?
                    {item,quantity:item.quantity + 1}
                    : item
                )
                setOrderItems(updateOrder);
              };


            const descrementQuantity = () => {
            const updateOrder = orderItems.map((item) => item.title === menuItem.title ?
            {item,quantity:item.quantity - 1}
              :item
            )
            setOrderItems(updateOrder);
         };
              useEffect (() => {
              const colorMode = darkMode ? "dark":"light" 
              document.body.setAttribute(colorMode)},[darkMode]);
      
          return(
              <div>
            <Header toggleMenu={toggleModeHandler}
            darkMode={darkMode}
            searchQueary={setSearchQuery}
            setSearchQuery={setSearchQuery}

        />
        <div className="app" style={{ margin:"350px 80px 350px 80px"}}>
             <MenuList menuItem= {menuItemData.filter(
              menuItem.title.toLowerCase().includes().toLowerCase()
             )}
             addToOrder={addToOrder}
   />
     <OrderList
     orderItems= {orderItems}
     incrementQuantity= {incrementQuantity}
     descrementQuantity={descrementQuantity}
     id= "order-List"
     />
        </div>
    </div>
  )
}
export default App;