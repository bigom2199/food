import "./assets/css/";

const MenuList = () => {
    return (
        <div className ="container">
            <div className ="intro">
                <h2 className="text-conter">Pizza</h2>
                <h2 className="text-conter">Burger</h2>
                <h2 className ="text-conter">Fries</h2>
                <p className="text-conter"></p>
            </div>
             <Item name="Pizza"
             price={99.99}
             description ="Classic pizza with your favorite toppings." 
               />
             <Item name="Burger" 
             price={79.99}
             description="A delicious burger with all the fixings."
              />
             <Item name="Fries" 
             price={59.99}
             description="Crispy golden fries served hot and fresh."
             />
        </div>
    )
}
export default MenuList;