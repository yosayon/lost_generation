const Order = function(order){
 this.id = order.id,
 this.user_id = order.user_id,
 this.created_at = order.created_at,
 this.line_items = order.line_items,
 this.products = order.products
}

Order.prototype.orderShowTemplate = function(){
 let template = Handlebars.compile($("#order-show-template")[0].innerHTML)
 return template;
}

Order.prototype.total = function(){
 let prices = [];
 let total = 0;
  for(let i = 0; i < this.products.length; i++){
   prices.push(Math.floor(this.products[i].price * this.line_items[i].quantity))
  }
  return total = prices.reduce((sum,val) => sum + val);
}

Order.prototype.formatTime = function(){
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 let order_date  = new Date(this.created_at);
 return order_date.toLocaleDateString("en-US");
}

Order.prototype.formatIndex = function(){
 let orderHTML = `
  <li>
   <a href="/users/${this.user_id}/orders/${this.id}"> Order Number: ${this.id} ${this.formatTime()}</a>
  </li>
 `
 return orderHTML;
}

Order.prototype.insertIntoPartial = function(){
 let order_id = this.id;
 let products = this.products;
 let total = this.total();
 let date = this.formatTime();
 line_items = [];
 for(let i = 0; i < products.length; i++){
   let obj = {
    product_picture_path: `/products/${products[i].id}`,
    product_picture: `${products[i].picture}`,
    product_name: products[i].name,
    product_price: Math.floor(products[i].price),
    quantity: this.line_items[i].quantity
   }
  line_items.push(obj);
 }
 return {order_id, line_items, total, date}
}

const Review = function(review){
  this.id = review.id,
  this.title = review.title,
  this.comment = review.comment
 }
 
Review.prototype.reviewShowTemplate = function(){
 let template = Handlebars.compile($("#review-show-template")[0].innerHTML)
 return template;
}


 


