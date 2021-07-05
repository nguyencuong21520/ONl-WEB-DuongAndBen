let form_signUp = document.querySelector("#formSignUp")

form_signUp.onsubmit = (e)=>{
    e.preventDefault();

    let name = form_signUp.name.value.trim()
    let email = form_signUp.email.value.trim()
    let pass = form_signUp.pass.value.trim()
    let cfpass = form_signUp.cfpass.value.trim()

    let data_signUp = {
        name : name,
        email : email,
        pass: pass,
    }
    if(pass.length>=6){
        if(pass == cfpass){
            signUp_process(data_signUp)
        }else{
            setTextError("Confirm password must be the same", "#cfpass-error")
        }
    }else{
        setTextError("Password must be more than 6 characters","#pass-error")
    }
}

// setTextError("Duong","#pass-error")


let setTextError = (content,query)=>{
    document.querySelector(query).innerHTML= content
    setTimeout(function () {
        document.querySelector(query).innerHTML = ""
    }, 5000);
}

let signUp_process = async (data)=>{
    let email = data.email
    let password = data.pass
    let name = data.name
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        await firebase.auth().currentUser.sendEmailVerification()
        sweetAlert('success','Successfully! please check your email')
    } catch (error) {
        let message = error.message
        sweetAlert('error',message)
    }
}

function sweetAlert(icon, content) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: content
      })
}


