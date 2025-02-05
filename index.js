let rname = document.getElementById(`rname`);
let remail = document.getElementById(`remail`);
let rpassword = document.getElementById(`rpassword`);

function Register() {
if (rname.value !== `sandro`) {
    rlname.textContent = `Name არასწორეა`;
    rlname.style.color=`red`
}

if(remail.value !== `sandro@sandro.com`) {
    rlemail.textContent = `Email არასწორეა`;
    rlemail.style.color=`red`
}

if(rpassword.value !== `sandro1234`) {
    rlpassword.textContent = `Password არასწორეა`;
    rlpassword.style.color = `red `
}
if(rname.value == `sandro` && remail.value == `sandro@sandro.com` && rpassword.value == `sandro1234`) {
    window.location.href = `./login.html`
}
}

function Login() {
    if (rname.value !== `sandro`) {
        rlname.textContent = `Name არასწორეა`;
        rlname.style.color=`red`
    }
    
    if(rpassword.value !== `sandro1234`) {
        rlpassword.textContent = `Password არასწორეა`;
        rlpassword.style.color = `red `
    }
    if(rname.value == `sandro` && rpassword.value == `sandro1234`) {
        window.location.href = `./login-land.html`
    }
    }