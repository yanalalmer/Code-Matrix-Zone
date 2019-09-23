
$(document).ready(function () {
    $('.submit').click(function (event){
        
        

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')){
            status.append('<div>email is valid</div>')
        } else {
            event.preventDefault()
            status.append('<div>email is not valid</div>')
        }

        if(subject.length >= 2) {
            status.append('<div>subject is valid</div>')
        } else {
            event.preventDefault()
            status.append('<div>subject is not valid</div>')
        }

        if (message.length >= 10) {
            status.append('<div>message is valid</div>')
        } else {
            event.preventDefault()
            status.append('<div>message is not valid</div>') 
        }
    })
})