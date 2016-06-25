// ==UserScript==
// @name Piperka responsive styles
// @author Zeddy
// @description Make piperka prettier on mobiles
// @include http://piperka.net*
// @version 1.0.0
// @require jquery
// ==/UserScript==

$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
$('head').append(`
<style>
//REQUIRE ./piperka-mobile.css REQUIRE//
</style>
`);
