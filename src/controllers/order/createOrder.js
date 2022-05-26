import Order from '../../models/order';
import User from '../../models/user';
import OrderMessage from '../../messages/orderMessages';

//Controller used to create a new message
export const createOrder = async (req, res) => {
  const response = new OrderMessage("create"); //message object with initial order create

  if (!req.body.email || req.body.products.length < 1) {
    response.setStatusMessage(406);
  } else
  try {
    const newOrder = new Order({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.surname,
      date: new Date(),
      status: "Pendiente",
      products:[],
    });
    req.body.products.forEach((product)=>{
        newOrder.products.push(product)
    })
    const orderSaved = await newOrder.save();
    if(req.user){
        const updateUser = await User.findOne({ email: req.body.email })
        updateUser.orders.push(newOrder)
        const savedUser = await updateUser.save();
    }
    response.setStatusMessage(200);
    response.setData(orderSaved);
  } catch (error) {
    response.setStatusMessage(500);
    console.log(error)
  }
  res.json(response); //returns the entire object with the stored status and data
};
