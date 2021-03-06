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
@media (max-width: 468px) {
  /* Body-wide margins waste precious screen-space */
  html body {
    margin: 0;
  }

  #maincornerback {
    display: none;
  }

  .container div.main {
    margin-left: 0;
    padding: 0 0.5em;
  }

  div#header {
    display: flex;
    flex-wrap: wrap;
  }

  div#header a[href="./"] {
    float: none;
    flex-basis: 50%;
  }

  div.header img[src] {
    float: none;
  }

  div.header a[href] {
    margin-left: 0;
  }

  /* Arrange layout downwards instead of sideways */
  body div.container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;  /* Padding shrinks content rather than expanding div */
  }

  .container div.sidebar {
    float: none;  /* Floats are always bad, mobile or not. Say no to floats. */
    width: initial;  /* Predefined widths are almost always bad. */
    display: flex;
    flex-direction: column;
  }

  .sidebar .control {
    flex: 1;
    float: none;
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
  }

  #loginwith {
    flex: 1;
    min-width: 50%;
    text-align: right;
  }

  /* Giant Project Wonderful Banner */
  /* Far too intrusive for mobiles */
  .sidebar div[id] {
    display: none;
  }

  /* Experimental accordion menu */
  /* I decided the gain was too low for the hassle,
   * but you can uncomment and check it out if you would like to.
   */
  /*
  .sidebar {
    overflow: hidden;
    height: 5em;
    animation-name: collapse-control;
    animation-duration: 0.2s;
  }

  .sidebar:after {
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
    width: 0;
    text-align: right;
    font-size: smaller;
    content: '(expand)';
  }

  .sidebar:hover {
    height: initial;
    animation-name: expand-control;
    animation-duration: 0.2s;
  }

  .sidebar:hover:after {
    content: '(expanded)';
  }
  */
  /* END Experimental accordion menu */

  .control p {
    margin: 0.5em 0;
    flex: 2;
  }

  /* I do this to display the current user on top of controls */
  /* Ideally, that specific element would have a selectable class. */
  .control p:nth-child(2) {
    order: -2;
  }

  /* None of these. */
  hr {
    display: none;
  }

  /* Bookmark form */
  form[action="updates.html"] p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  form[action="updates.html"] p label {
    min-width: 50%;
    flex: 1;
    margin: 0.5em;
  }

  form p input[type="text"],
  form p input[type="password"],
  button[name="action"] {
    min-width: 100%;
    flex: 1;
    margin: 0.5em;
  }

  /* Comic list */
  #piperka_list {
    display: flex;
    flex-direction: column;
  }

  #piperka_list div.list3 {
    width: initial;
  }

  #piperka_list .list {
    margin: 0;
    padding: 0;
  }

  /*
   * These need padding because they are important the main feature.
   * It's easy to accidentally click the wrong link due to how
   * densely they are packed. I've done it many times, myself.
   */
  #piperka_list .list li {
    height: 2em;
    display: flex;
    align-items: center;
  }

  /* Comic browsing */
  #sort_by {
    display: flex;
    justify-content: space-between;
  }

  #sort_by a {
    text-align: center;
  }

  /* Flexing the link means you can click the whole space of the li item */
  #piperka_list .list li a {
    flex: 1;
  }

  /* Footer */
  div.legalese {
    margin-left: 0;
  }

  /* Invidual comic page */
  div.main div.related, div.main div#readerchart {
    width: initial;
    float: none;
  }

  .related tr {
    height: 1.5em;
  }

  img {
    max-width: 100%;
  }

  /* User account managament */

  .priv_settings textarea {
    max-width: 100%;
    padding: 0;
    margin 0;
    border: 0;
  }

  .priv_settings p {
    display: flex;
    flex-direction: column;
  }

  /* Bottom ad */

  /* First, we make room for scrolling all the way to the bottom + ad height */
  body {
    padding-bottom: 3em;
  }

  #smalladbg {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* Turns out I can override inline styles */
    width: initial !important;
  }

  #smalladbg table {
    width: initial !important;
    max-width: 351px;
  }
  
  #smalladbg table img {
    height: auto !important;
  }

  /* Top ad */

  /* First we make room over the header for the ad */
  
  #header  {
    padding-top: 5em;
  }

  #header div[id] {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #ddd;
  }

  #header table {
    width: initial !important;
    max-width: 468px;
  }

  #header table img {
    height: auto !important;
  }
}

</style>
`);
