<?php

if(isset($_POST["str"])) $str = $_POST["str"]; else die();

$emailSubject = $str;
$emailBody = "";
mail('seanmichaelmcdonald@gmail.com', $emailSubject, $emailBody);