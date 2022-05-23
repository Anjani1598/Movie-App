let signupData = JSON.parse(localStorage.getItem("signupData"))
    let form = document.querySelector("form")

    form.addEventListener("submit",login)

    function login(){
        event.preventDefault()
        let loginData = {}
        loginData.email = form.email.value
        loginData.password = form.password.value



        if(loginData.email===signupData.email&&loginData.password===signupData.password)
        {
            alert("login Successful")
            window.location.href = "index.html"
        }
        else
        {
            alert("Invalid Credentials")

        }
        localStorage.setItem("loginData",JSON.stringify(loginData))







    }