// Helper function to capitalize the first letter of each word
function capitalizeName(name){
  return name.replace(/\b\w/g, char => char.toUpperCase());
}

// Helper function to validate email format
function validateEmail(email){
  const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
}

// User Class
class User{
  constructor(name, email){
    this.name = capitalizeName(name);
    this.email = email;
  }
  
  viewData(){
    return `User: ${this.name}, Email: ${this.email}`;
  }
}

// Admin Class inherting from User
class Admin extends User{
  editData(newData){
    return`Data updated to: ${newData}`;
  }
}

// Instantiate users and admin
let users = [];
let admin;

// Function to register a user
function registerUser(){
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();

  if(!validateEmail(email)){
    document.getElementById("output").innerText = "Invalid email format.";
    return;
  }

  const user = new User(name, email);
  users.push(user);
  document.getElementById("output").innerText = `User ${user.name} registered successfully.`;
}

// Function to register an admin
function registerAdmin(){
  const name = document.getElementById("adminName").value.trim();
  const email = document.getElementById("adminEmail").value.trim();

  if(!validateEmail(email)){
    document.getElementById("output").innerText = "Invalid email format.";
    return;
  }

  admin = new Admin(name, email);
  document.getElementById("output").innerText = `Admin ${admin.name} registered succussfully.`;
}

// Function to view data (available to both usres and admin)
function viewData(){
  let data = users.map(user => user.viewData()).join("\n");
  document.getElementById("output").innerText = data || "No users registered";

}

// Function to edit data (admin only)
function editData(){
  if(admin){
    const newData = "updated website data.";
    document.getElementById("output").innerText = admin.editData(newData);
  }else{
    document.getElementById("output").innerText = "Only admin can edit data.";
  }
}