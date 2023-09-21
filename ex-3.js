// Exercise #3: Array of Orders

let orders = [
  {
    id: 1, //1-1 = Array[0]
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2, //2-1 = Array[1]
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3, //3-1 = Array[2]
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4, //4-1 = Array[3]
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5, //5-1 = Array[4]
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here
// console.log(orders); // 5 orders //

let isArray = Array.isArray(orders); //check Orders is Array
console.log(isArray); //true

let creditCardTypeOfBlindermann = orders[2].creditCardType; //creditCardType of Toinette Blindermann
console.log(creditCardTypeOfBlindermann); //switch

orders[2].creditCardType = "visa"; //เปลี่ยน creditType เป็น visa
console.log(orders[2].creditCardType); //visa

let totalPurchaseOfJoannet = orders[3].productQuantity; //productQuantity of Anjela Joannet
console.log(totalPurchaseOfJoannet); //96

let totalPurchaseOfDary = orders[1].productPrice; //productPrice of Celia Dary
console.log(totalPurchaseOfDary); //10746

orders.shift(); //delete object about "Brenn Hugk" in orders
console.log(orders); //ต้องไม่ show object "Brenn Hugk" ใน orders
