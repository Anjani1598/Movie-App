let form = document.querySelector("form")

    form.addEventListener("submit",signup)

    function signup(){
        event.preventDefault()
        let obj = {}

        obj.name = form.name.value;
        obj.contact = form.contact.value
        obj.email = form.email.value
        obj.password = form.password.value;
        console.log(obj)

        localStorage.setItem("signupData",JSON.stringify(obj))

    }