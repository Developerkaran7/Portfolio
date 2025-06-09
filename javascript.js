// // Adding form data in my google drive 
// first you enter the form data in your google drive Name , Number,Email,and Message 
// And Click Extensions App script title name contact form and that 
// Then click on github script and paste that contact form and save and run
// and review permission and confirm your account advance go to contact form and safe and
// Deploy New Deployment clink setting web app fill descriptions who has access anyone
// copy that web app link and paste here js file 6
// Github repository's form to google sheet 
// first you go to this link https://github.com/jamiewilson/form-to-google-drive

// adding web app url here
// and this form submit to google drive copy and paste in form

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9qFpCSOiDoMOS6anj334JrZ5RPiWOVKcRjyAshPdXNTX-Tb9HlaaGBEfOvvqECOXS6w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        // .then(response => console.log('Success!', response))
        // and console the that message after the clink button is submit
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            // and now adding time for that message using setTimeout
            setTimeout(function () {
                msg.innerHTML = ""
                // 2000 is mini seconds
            }, 2000)
            // now reset the form
            form.reset()
        })

        .catch(error => console.error('Error!', error.message))
});
