/*var text = "Frontend Develpment";
//var term="FrontEnd"
console.log(text.toLowerCase().includes("fronT".toLowerCase()));

//var w ="aaa";
//console.log(w.repeat(22));
*/

////////////////////////////////////////////////////////////////////////////////

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");

//Empty Array - Global                /////////////////////////////////////////////////////

var products = [];
var mainIndexglobal;
console.log(mainIndexglobal);

if (localStorage.getItem("productsKey") != null) {
  products = JSON.parse(localStorage.getItem("productsKey"));
  displyProduct();
} else {
  products = [];
}

function addProductLast() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    Desc: productDescInput.value,
    id: Date.now(),
  };

  if (addBtn.innerHTML == "Add Product") {
    products.push(product);
    displyProduct();
    localStorage.setItem("productsKey", JSON.stringify(products));
    clearForm();
  } else {
    products.splice(mainIndexglobal, 1, product);
    displyProduct();
    localStorage.setItem("productsKey", JSON.stringify(products));
    clearForm();

    addBtn.innerHTML = "Add Product";
  }
}
function displyProduct() {
  var trs = "";

  for (var i = 0; i < products.length; i++) 
  {
    trs += `<tr>
<td>${i}</td>
<td>${products[i].id}</td>
<td>${products[i].name}</td>
<td>${products[i].price}</td>
<td>${products[i].category}</td>
<td>${products[i].Desc}</td>

  <td> <button onclick="updateProduct(${products[i].id})" class="btn btn-outline-danger">Update</button></td>
  <td> <button onclick="deleteProduct(${products[i].id})" class="btn btn-warning">Delete</button></td>
  <td> <button  onclick="repeatProduct(${products[i].id})" class="btn btn-primary">Repeat</button></td>
  </td>
  </tr>`;
  }
  document.getElementById("tableBody").innerHTML = trs;
}



function updateProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
    
     mainIndexglobal=i;
      productNameInput.value = products[i].name;
      productPriceInput.value = products[i].price;
      productCategoryInput.value = products[i].category;
      productDescInput.value = products[i].Desc;

      addBtn.innerHTML = "Update Product";
    }
  }
}
function deleteProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      mainIndexglobal = i;
      products.splice(i, 1);

      localStorage.setItem("productsKey", JSON.stringify(products));
      displyProduct();
    }
  }
}

function search(term) {
  var wantArray = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
      wantArray.push(products[i]);
    
    }
     
  }
  var trs = "";

  for (var i = 0; i < wantArray.length; i++) {
    trs += `<tr>
<td>${i}</td>
<td>${wantArray[i].id}</td>
<td>${wantArray[i].name}</td>
<td>${wantArray[i].price}</td>
<td>${wantArray[i].category}</td>
<td>${wantArray[i].Desc}</td>

<td> <button onclick="updateProduct(${wantArray[i].id})" class="btn btn-outline-danger">Update</button></td>
<td> <button onclick="deleteProduct(${wantArray[i].id})" class="btn btn-warning">Delete</button></td>
<td> <button  onclick="repeatProduct(${wantArray[i].id})" class="btn btn-primary">Repeat</button></td>
</td>
</tr>`;

    // mainIndex = i;
  } 
  document.getElementById("tableBody").innerHTML = trs;
}


function displayFromSearch(wantArray)
{

}


function repeatProduct(id) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      mainIndexglobal = i;
      productNameInput.value = products[i].name;
      productPriceInput.value = products[i].price;
      productCategoryInput.value = products[i].category;
      productDescInput.value = products[i].Desc;
      addProductLast();
    }
  }
}

function clearForm() {
  document.getElementById("productNameInput").value = "";
  document.getElementById("productPriceInput").value = "";
  document.getElementById("productCategoryInput").value = "";
  document.getElementById("productDescInput").value = "";
}

function deleteProductLast() {
  products.pop(products);
  localStorage.setItem("productsKey", JSON.stringify(products));
  displyProduct();
}

function deleteProductFirst() {
  products.shift(products);
  localStorage.setItem("productsKey", JSON.stringify(products));
  displyProduct();
}

/*function addProductFirst() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    Desc: productDescInput.value,
  }

  products.unshift(product);

  displyProduct();
  clearForm();
  localStorage.setItem("productsKey", JSON.stringify(products));
}
*/

/*
function test() {
    var x = "";

    for (i = 0; i < 5; i++) {

        var y = window.prompt();

        x += y;
    }
    console.log(x)

}
*/

/******************************** امثله

if (condition) 
{
    //  block of code to be executed if the condition is true
}

function iddd() {
    var fy = document.getElementById("productNameInput");
}

var ttt = {

    aaa: productDescInput,
    shgfa: productDescInput

}

var arr = [

   {name:"sdjkghksj",price:656},{}
]
dgjsf
for (;;)
{

}

var ygy=0;
while(ygy<10)
{
console.log("dhgfshj")
ygy++;
}*/
