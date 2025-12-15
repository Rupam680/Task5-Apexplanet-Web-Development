const newUser = document.getElementById('userDetails');
newUser.addEventListener('submit',(e)=>{
e.preventDefault();
  const name = document.getElementById("name").value.trim(); // get reference from my name part
  const email = document.getElementById("email").value.trim();// get reference from my email part
  const password = document.getElementById("password").value.trim();// get reference from my password part
   // validation
  if (!name || !email  || !password) {
    alert("please fill all the details!!");
    return;
  }

  // after getting all details correctly
const user = {name , email , password};
localStorage.setItem("UserData" , JSON.stringify(user));
alert("Signup Successfully✅✅! Redirecting to login....");
window.location.href = 'login.html';
newUser.reset();
})