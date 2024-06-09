function SendEmail(form1){
var fullname = document.getElementById("f_name").value;
var email = document.getElementById("email").value;
var content = document.getElementById("message").value;

  
  const formData = new FormData();
  
  formData.append('name', fullname);
  formData.append('email', email);
  formData.append('message', content);
  formData.append('access_key', '66568971-dd21-4547-8505-47c7897b38ea');
  //Customize
  formData.append('from_name', 'DEV Notifications');
  formData.append('subject', 'New Form Submission from DEVELOPER');
 
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);


    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                
                console.log('Success');

            } else {
                console.log('Error');
            }
        })
        .catch(error => {console.log('Error');
            
        })
        .then(function() {
            form.reset();
            }, 3000);


}