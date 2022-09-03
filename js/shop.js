/// Funcion para vaciar Cleancart al arrancar la pagina, para que sea una cesta vacia (vacia el carrito de inicio)
   cleanCart(); 

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    var productoCarrito;
    products.forEach(producto => {
        if(id == producto.id){
            //alert("Has añadido: "+ producto.name);
            productoCarrito = producto;
        }
    });

    // 2. Add found product to the cartList array
    cartList.push(productoCarrito);
    console.log(cartList); //solo es para ver en la consola de debug
    calculateTotal();
    actualizarCesta();
}

// Exercise 2
function cleanCart() {
    cartList = []; //vacia el cartlist
    cart = []; //vacia el cart
    document.querySelector('#cart_list').innerHTML="";
    calculateTotal();
    actualizarCesta();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    var total = 0.00;
    cartList.forEach(producto => {
        total += producto.price;
    });
    document.getElementById('total_price').innerHTML=total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
 
    var entradaDeCesta = {}; //variable vacia
    cart = []; //vacia el cart
    cartList.forEach(item => {  //hacer un bucle de todo lo que contiene cartlist
        if(cart.length >=1) {
            var existe = false;
            cart.forEach(entradaFinal => {
                if(item.id == entradaFinal.id){
                  existe = true;
                   entradaFinal.quantity = entradaFinal.quantity + 1;
                   entradaFinal.totalPrice = entradaFinal.totalPrice + entradaFinal.price;
                }          
           });
                if(!existe){
                    entradaDeCesta = {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        type: item.type,
                        offer: item.offer,
                        quantity:1,
                        totalPrice: item.price
                    };    
                 cart.push(entradaDeCesta);
                }
         }else{
           entradaDeCesta = {
               id: item.id,
               name: item.name,
               price: item.price,
               type: item.type,
               offer: item.offer,
               quantity:1,
               totalPrice: item.price
           };
           cart.push(entradaDeCesta);   
       }
   });
   applyPromotionsCart(); //aplicar el descuento (por oferta aplicada segun producto)
}
// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(bag =>{ 
        if(bag.offer != null){   //!= distinto de (null), existe offer
            if(bag.offer.number <=bag.quantity){

                var descuento = bag.totalPrice * bag.offer.percent / 100;
                bag.totalPrice = Math.round(((bag.totalPrice - descuento) + Number.EPSILON) * 100) / 100;

                var totalWithDiscount = document.querySelector("#total_price").innerHTML - descuento;

                document.querySelector("#total_price").innerHTML= Math.round(((totalWithDiscount) + Number.EPSILON) * 100) / 100;

            }
        }
    });

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById('cart_list').innerHTML="";
    var tabla = "";
    if(cart.length >= 1) {
        cart.forEach(actualizar => {
            tabla += "<tr><th scope='row'> "+ actualizar.name + "</th><td>"+ actualizar.price + " $</th><td>"+ actualizar.quantity + "</th><td>"+ actualizar.totalPrice +" $</td></tr>"
        });

    }
    document.getElementById('cart_list').innerHTML = tabla;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    calculateTotal();
    actualizarCesta();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    calculateTotal();
    actualizarCesta();
}

function open_modal(){
	console.log("Open Modal");
    generateCart(); //llena el carrito
	printCart(); //muestra el carrito
}

//------- Funciones Extra-----
function actualizarCesta(){
    var numeritoCesta = document.getElementById('count_product');
    numeritoCesta.innerHTML = cartList.length;
}

