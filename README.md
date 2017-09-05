# visitor-movement-tracker
A small piece of JS that will track page scrolling and clicks, and send an AJAX request (and send you an email)
This project will be the easiest to implement if you are already using jQuery and PHP. 

<h2>Summary:</h2>

<p>The first time a user scrolls on your page, you will be sent an email (Sorry, just visiting the page will not send an email!). The scroll event trigger will only occur once. Then, when the user clicks on the DOM element of your choice, you will be sent another email. You can have the text of any DOM element sent to you, so you have an idea of where users are clicking on your website.</p>

<h2>1. Download and edit the files</h2>

 <h3>js.js</h3>
  <p>
  There are 2 lines you will need to change. 
  Both involve deciding whick DOM object you want to use as a "trigger" for the AJAX request. (Also called adding an Event 
   Listener to a DOM object).</p>
  
  <p>Choose your element that will trigger the AJAX request. (js.js, line 20) </p>
  <code>
   $(document).on("mouseenter touchstart", "YOUR DOM ELEMENT HERE", function(e){ </code>
   <p></p>

 <p>Choose your element ( if different ) to send as the text data. (js.js, line 22) </p>
  <code>	
   var dataString = $("YOUR DOM ELEMENT HERE (DOES NOT HAVE TO BE THE SAME)").html(); 
  </code> 
   
 <h3>php</h3>
  <p>
  Add your email address (sendMeAnEmail.php, line 7): </p>
  <code>
  mail('/* email goes here BETWEEN quotes, delete stars and slashes */', $emailSubject, $emailBody); </code>

<h2>2. Add files</h2> 
<p>Add to the directory where your url(web site file) exists.</p>

<h2>3. Edit your html(website url) </h2>
Add this line to your html(website url), either at the end of the 'body', or where the other JS files are loaded. 
<code> <script src="js/js.js"></script> </code>
