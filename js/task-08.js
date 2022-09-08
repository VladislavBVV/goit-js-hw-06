const formRef = document.querySelector('.login-form');
console.log(formRef);

const handleSubmit = (event) => {
    event.preventDefault();

    const {
        elements: {email, password},
    } = event.currentTarget;
   if (email.value === "" || password.value === "") {
       alert("Заповни пусті поля!");
      
   }
    const userData = {
        email: email.value,
        password: password.value,
    };
    console.log(userData);
    
    formRef.reset();
    
};
formRef.addEventListener("submit", handleSubmit);




const btn = document.querySelector("button");
console.log(btn);


