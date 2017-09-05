<?php

if(isset($_POST["str"])) $str = $_POST["str"]; else die();

$emailSubject = $str;
$emailBody = "";
mail('/* email goes here BETWEEN quotes, delete stars and slashes */', $emailSubject, $emailBody);
