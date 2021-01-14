<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<style>
@media all and (min-width: 721px) {
    html {
        font-size: 250%;
    }
}

@media all and (max-width: 720px) {
    html {
        font-size: 250%;
    }
}

@media all and (max-width: 640px) {
    html {
        font-size: 222.222%;
    }
}

@media all and (max-width: 540px) {
    html {
        font-size: 187.5%;
    }
}

@media all and (max-width: 480px) {
    html {
        font-size: 166.668%;
    }
}

@media all and (max-width: 432px) {
    html {
        font-size: 150%;
    }
}

@media all and (max-width: 414px) {
    html {
        font-size: 143.75%;
    }
}

@media all and (max-width: 400px) {
    html {
        font-size: 138.888%;
    }
}

@media all and (max-width: 393px) {
    html {
        font-size: 130.204%;
    }
}

@media all and (max-width: 375px) {
    html {
        font-size: 130.204%;
    }
}

@media all and (max-width: 360px) {
    html {
        font-size: 125%;
    }
}

@media all and (max-width: 340px) {
    html {
        font-size: 118.056%;
    }
}

@media all and (max-width: 320px) {
    html {
        font-size: 111.112%;
    }
}
* {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent
}


html,
body,
article,
div,
span,
object,
iframe,
p,
del,
dfn,
h2,
h1,
h4,
h3,
h5,
h6,
em,
img,
q,
samp,
small,
ins,
kbd,
strong,
b,
i,
ol,
li,
ul,
dl,
dd,
dt,
form,
label,
fieldset,
table,
tbody,
thead,
tfoot,
th,
td,
tr,
aside,
header,
footer,
nav,
section {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(35, 167, 217, .5);
    height: 100%;
}

body {
    font-family: Arial, Helvetica, sans-serif, "Lucida Grande", Verdana;
    word-wrap: break-word;
    line-height: 1;
    min-width: 320px;
    background-color: #f9f9f9 !important;
    max-width: 720px;
    margin: 0 auto;
    color: #333;
    height: 100%;
}
#app{
    height: 100%;
}
@supports(bottom: env(safe-area-inset-bottom)) {
    body {
        padding-bottom: env(safe-area-inset-bottom)
    }
}

h1,
h3,
h2,
h5,
h4,
h6 {
    font-weight: normal
}

img {
    border: 0;
    max-width: 100%;
    height: auto;
    vertical-align: top
}

ol,
ul {
    list-style: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

abbr,
acronym {
    font-variant: normal;
    border: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

del {
    text-decoration: line-through
}

address,
cite,
caption,
code,
em,
dfn,
th,
var {
    font-style: normal;
    font-weight: 400
}

input[type=button],
input[type=submit] {
    padding: 0;
    -webkit-appearance: none;
    outline: none
}

button,
input[type=button] {
    cursor: pointer;
    -webkit-appearance: button
}

a:active,
a:focus,
input:focus {
    outline: none
}

b {
    font-weight: normal
}

a,
input {
    background-clip: padding-box
}

a {
    text-decoration: none;
    color: #333;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

input,
select,
textarea {
    font: .65em sans-serif, Helvetica, Arial, "Lucida Grande", Verdana
}

input[type=checkbox],
input[type=radio] {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: .5em
}
input[type=text] {
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: .72em;
    -webkit-border-radius: .72em;
    font-size: .7em;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    width: 3.43em;
    height: 1.72em;
    padding: 0 .6em;
    text-align: center;
    color: #888;
    vertical-align: middle
}

input:disabled {
    background-color: #fff;
    border: 0
}

.textbox input {
    border: 0 none;
    border-radius: 0;
    font-size: .65em;
    line-height: 1.5;
    width: 100%;
    height: auto;
    padding: .6em 0;
    text-align: left;
    color: #333
}

textarea {
    border: 0 none;
    width: 100%;
    color: #333;
    height: 100%;
    vertical-align: middle;
    line-height: 1.2;
    resize: none;
    padding: .5em 2.4em .5em 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
}
</style>
