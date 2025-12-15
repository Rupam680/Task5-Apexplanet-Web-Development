
const userLogin = document.getElementById('userLoginDetails');

userLogin.addEventListener('submit', (e) => {
  e.preventDefault();
    // get reference
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
    // validations check
  if (!email || !password) {
    alert("Please provide your registered email & password");
    return;
  }
    // get user data from local storage
    const savedUser = JSON.parse(localStorage.getItem('UserData'));
    if(!savedUser){
        alert('no user found! please signup first');
        return;
    }
   // check credentials
   if(email === savedUser.email && password === savedUser.password){
    alert('Login Successfully✅ !redirecting to home page...');
    localStorage.setItem('loginUser' , JSON.stringify({email})); // store the login data
    window.location.href = 'index.html';
   } else{
    alert('invalid email and password');
   }
    userLogin.reset();
});