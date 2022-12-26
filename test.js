function verif(){
    
    const  userName = document.getElementById('username').value;
    const  email = document.getElementById('mail').value;
    const  password = document.getElementById('pass').value;
    var  err= document.getElementById('error');

    if ( (!userName)  || (!password)|| (!email) ) 
{
    err.style.visibility = "visible";
    console.log('aa')
    }
    else {
        if (userName==='medhassen_25')  {
            console.log('salut')
        }
        if (password==='123456'){
            console.log('salut')

        }
        if(email==='hassenaoini2011@gmail.com'){
            console.log('salut')

        }
    }

    
        





}



//set 
localStorage.setItem('userName','medhassen_25');
localStorage.setItem('email','hassenaoini2011@gmail.com');
localStorage.setItem('password','123456');