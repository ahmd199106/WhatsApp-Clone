var username = '';

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();



// send the message to user
function send_message(message){
      var prevSms = $('.container').html();
     
      if (prevSms.length > 8) {
        prevSms = prevSms + '<br>'
        }
      $('.container').html(prevSms + '<div class="chatBubble"><span class="current_sms">'  + message + '</span><span class="timeStamp">' + hour + ':' + minutes +  '</span></div>');

      $('.current_sms').hide();
      $('.current_sms').delay(400).fadeIn();
    }



// get the username
function get_username(){
    send_message('Hi, my name is WhatsApp Chatbot , what is  your name?');
}



// simple ai function that sends a message based on the user question
function ai(message){
        if (username.length < 3){
          username = message;
          send_message('Hi, nice to meet you ' + username + ', how are you doing.. ');
          console.log('yo');
        }

        else if ((message.indexOf('how are you') >= 0) || (message.indexOf('about you')  >= 0) || (message.indexOf('good')  >= 0) ){
          send_message('Am okey, thanks for asking ' + '<i>' + username + '</i>' + ', topics - time/age/sex/love/name');
        }

       else if ((message.indexOf('what is your name') >= 0) || (message.indexOf('name') >= 0)){
          send_message('My name in WhatsApp Chatbot.. am here to chat with you..');
        }

       else if ((message.indexOf('old') >= 0) || (message.indexOf('age') >= 0)){
          send_message('I do not know how old i am.. am sorry..!!');
        }

        else if ((message.indexOf('sex') >= 0) || (message.indexOf('love') >= 0)){
          send_message('Am sorry i can not tell you about that.');
        }

        else if (message.indexOf('time') >= 0){
          send_message('Current time is: ' + hour + ':' + minutes );
        }
        else {
            send_message('sorry wrong question, topics - time/age/sex/love/name');
            console.log('yi');
        }
}



// main JQuery function
$(function() {
      // this function is used to ask the introductory question to the user
      get_username();
      // to send the message on pressing enter key
      $('#text-sms').keypress(function(event){
        if (event.which == 13) {
             if(true) {
            $('#send-button').click();
            event.preventDefault();
          }
        }
      });
    $('#send-button').click(function(){
        var prevSms = $('.container').html();
        var sms = $('#text-sms').val();
        var username = '<div class="user">' + sms + '</span><span class="timeStamp">' + hour + ':' + minutes +  '</span></div>';
        
        $('#text-sms').val('');
          //store the first sms
        var prevSms = $('.container').html();

          //check if prev sms length is greater than 8
        if (prevSms.length > 8) {
          prevSms = prevSms + '<br>'
          }

        //pushing the sms to the container div
        $('.container').html(prevSms + username );
        // the main function
        ai(sms);
        //scroll to bottom
        $('.container').scrollTop($('.container').prop('scrollHeight'));
      });
});