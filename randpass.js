*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    background: url("images/overlay-01.svg") center no-repeat;
    background-size: cover;
    position: relative;
}

body {
    font-family: 'Economica', sans-serif;
}

/* header */
header {
    width: 100%;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    font-size: 80px; 
    text-align: center;
    color: white;
    letter-spacing: 0.5rem;
}

/* mini-description */
h5 {
    font-size: 20px;
    color: white;
    text-align: center;
    letter-spacing: .15rem;
    font-style: normal;
}

/* container */
.container {
    width: 100%;
    max-width: 98rem;
    margin: auto;
    padding: 0 1.5rem;
    overflow: auto;
}

/* questions icon/button */
.btn {
    border: none; 
    background-color: transparent;
    border-radius: 50%;
    padding: 0.5rem;
    margin-left: -0.8rem;
    cursor: pointer;
    position: absolute; 
}

.btn i:hover {
    background-color: #8DB1EA;
    -webkit-box-shadow: 0 0 5px 10px #6897e3;
    -moz-box-shadow: 0 0 5px 10px #6897e3;
    box-shadow:   0 0 5px 10px #6897e3;
}

.btn i {
    z-index: -2;
    border-radius: 50%;
}

button {
    outline: none !important;
}

/* password generator style */
.generator {
    margin: 0 auto;
    width: 60%; 
    padding: 0.5rem;
    margin-top: 3rem;
    position: relative;
}

/* style text box */
.result {
    width: 100%;
    height: 3.5rem;
    border-radius: 2rem;
    padding: 1rem;   
    box-sizing: border-box;
    position: relative; 
    outline: none;  
    border: 2px solid white;
    font-family: 'Economica', sans-serif;
    font-size: 26px;
    letter-spacing: 0.1rem;
}

.result:focus {
    border-color: white;
    box-shadow: 0 0 20px 0 white;
}

.generator input[type = "text"] {
    padding-left: 5rem;
}

/* generate button */
.genbtn {
    position: absolute;
    left: 0;
    padding: 10px 18px;
    transition: 0.3s;
    border-radius: 2rem;
    background-color: #F2F2F2;
    height: 3.5rem;
    outline: none;
    border: none;
}

.genbtn:hover {
    background-color: #d9d9d9;
}

/* password length style */
.passLength {
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    padding: 0.5rem;
    margin-bottom: 1.6rem;
}

.lengthLabel {
    color: white;
}

.lengthInput {
    font-family: 'Economica', sans-serif;
    font-size: 24px;
    border: 0;
    border-bottom: 3px dotted white; 
    background-color: transparent;
    outline: none;
    width: 5%;
    text-align: center;
}

/* checkboxes */
.checkboxes {
    margin: 0 auto;
    width: 30%; 
    border: 3px solid #B1C9EF;
    border-radius: 12px;
    padding: 0.5rem;
    font-family: 'Economica', sans-serif;
    font-size: 22px;
    color: white;
    letter-spacing: 0.05rem;
}

.checkboxes label {
    padding-left: 0.5rem;
}

input[type = "checkbox"] {
    vertical-align: middle; 
    position: relative;
    bottom: .25em; 
}

input[type = "checkbox"]:before {
	font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: 900;
    font-size: 15px;
    color: transparent !important;
    background: white;
    border: 1px solid white;
    border-radius: 4px;
}

input[type=checkbox]:checked:before {
	color: black !important;
}

/* footer */
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
}

.dots {
    margin: 0 auto;
    padding-bottom: 0.55rem;
}

img {
    width: 12%;
    height: auto;
}

.info {
    font-size: 13px;
    letter-spacing: 5px;
    text-align: center;
    margin: 0 auto;
}

/* responsive */
@media only screen and (max-width: 900px) {
    html { 
        background: url("images/overlay-01.svg") no-repeat;
        background-size: cover;
        background-position: 90% 20%;
    }
    header {
        font-size: 42px;
    }
    h5 {
        margin-top: 20px;
        font-size: 15px;
    }
    .checkboxes {
        font-size: 18px;
        width: 70%; 
    }
    .generator input[type = "text"] {
        padding-left: 5rem;
    }
    .passLength {
        font-size: 16px;
    }
    .result {
        font-size: 16px;
    }
    .lengthInput {
        font-size: 20px;
        border-bottom: 2px dotted white; 
        width: 10%;
    }
    img {
        width: 20%;
    }
    footer {
        color: white;
    }
    .info {
        color: black;
    }
    .generator {
        margin-top: 1.5rem;
    }   
    .btn {
        margin-left: -1.7rem;
    }
}

/* landscape */
@media only screen and (max-height: 400px) {
    html { 
        background-color: #8DB1EA;
    }
    footer {
        visibility: hidden;
    }
}
