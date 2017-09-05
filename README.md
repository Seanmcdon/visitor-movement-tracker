# visitor-movement-tracker
A small piece of JS that will track page scrolling and clicks, and send an AJAX request (and send you an email)
This project will be the easiest to implement if you are already using jQuery and PHP. 

Summary:

The first time a user scrolls on your page, you will be sent an email (Sorry, just visiting the page will not send an email!). This will only happen once per visit. Then, when the user clicks on the DOM element of your choice, you will be sent another email, with the text of the element that was clicked. 

1. Edit the files

 js.js
  There are 2 lines you will need to change. 
  Both involve deciding whick DOM object you want to use as a "trigger" for the AJAX request. (Also called adding an Event 
   Listener to a DOM object).
  
   $(document).on("mouseenter touchstart", "YOUR DOM ELEMENT HERE", function(e){
	
   var dataString = $("YOUR DOM ELEMENT HERE (DOES NOT HAVE TO BE THE SAME AS ABOVE)").html();   
   
 php
  Add your email address in this line of the file shown below: 
  mail('/* email goes here BETWEEN quotes, delete stars and slashes */', $emailSubject, $emailBody);

2. Add files to the directory where your url(web site file) exists.

3. Add this line to your url(web site file), either at the end of the 'body', or where the other JS files are loaded. 
 <script src="js/js.js"></script>
