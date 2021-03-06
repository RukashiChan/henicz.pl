'use strict';

// Devtools console message ✨
// Some DevTools console messages ✨
const infodev = () => {
	const welcomeMessage = 'color: red; font-size: 25px; font-weight: bold;';
	const infoMessage = 'color: grey; font-size: 10px; font-weight: bold;';

	console.log('%cWitaj!', welcomeMessage);
	console.log('%cMój kod znajdziesz na stronie https://github.com/rukachan/henicz.pl', infoMessage);
	

};

infodev();

window.onload=function(){

const language_versions = [];
const languagesMessage = 'color: black; font-size: 25px; font-weight: bold;';
language_versions.push("Część. Nazywam się Mateusz Henicz, mam 18 lat i pochodzę z Polski. Aktualnie pisze parę projektów w Node.js");
language_versions.push("Saluton. Mia nomo estas Mateusz Henicz, mi havas 18 jarojn kaj mi venas el Pollando. Mi nuntempe skribas kelkajn projektojn en Node.js");
language_versions.push("Hi. My name is Mateusz Henicz,  I'm 18 years old and I come from Poland. I'm currently writing a couple of Node.js projects<br><br><a href='https://github.com/RutsuKun/animawka-backend'>>animawka</a><br><a href='https://github.com/RutsuDEV/Eden-of-the-East'>>eden of the east</a><br><a href='https://github.com/RutsuDEV/minisite-template'>>minisite template</a>");
language_versions.push("Hallo. Ich heiße Mateusz Henicz, ich bin 18 Jahre alt und komme aus Polen. Momentan schreibe ich ein paar Projekte bei Node.js");
language_versions.push("一部 私の名前はMateusz Heniczです。私は17歳です。私はポーランドから来ました。 現在、彼はNode.jsでいくつかのプロジェクトを書いています ");

document.getElementById("content").innerHTML = language_versions[2];
document.getElementById("languageEnglishBtn").classList.add('active');

document.getElementById("languagePolishBtn").addEventListener("click", displayPolish);
document.getElementById("languageEsperantoBtn").addEventListener("click", displayEsperanto);
document.getElementById("languageEnglishBtn").addEventListener("click", displayEnglish);
document.getElementById("languageGermanBtn").addEventListener("click", displayGerman);
document.getElementById("languageJapaneseBtn").addEventListener("click", displayJapanese);

function displayPolish(){
	var i = 0;
    var a = document.getElementsByTagName('a');
    for (i; i < a.length; i++) {
        a[i].classList.remove('active')
    }
	document.getElementById("languagePolishBtn").classList.add('active');
	document.getElementById("content").innerHTML = language_versions[0];
}

function displayEsperanto(){
	var i = 0;
    var a = document.getElementsByTagName('a');
    for (i; i < a.length; i++) {
        a[i].classList.remove('active')
    }
	document.getElementById("languageEsperantoBtn").classList.add('active');
	document.getElementById("content").innerHTML = language_versions[1];
}

function displayEnglish(){
	var i = 0;
    var a = document.getElementsByTagName('a');
    for (i; i < a.length; i++) {
        a[i].classList.remove('active')
    }
	document.getElementById("languageEnglishBtn").classList.add('active');
	document.getElementById("content").innerHTML = language_versions[2];
}

function displayGerman(){
	var i = 0;
    var a = document.getElementsByTagName('a');
    for (i; i < a.length; i++) {
        a[i].classList.remove('active')
    }
	document.getElementById("languageGermanBtn").classList.add('active');
	document.getElementById("content").innerHTML = language_versions[3];
}

function displayJapanese(){
	var i = 0;
    var a = document.getElementsByTagName('a');
    for (i; i < a.length; i++) {
        a[i].classList.remove('active')
    }
	document.getElementById("languageJapaneseBtn").classList.add('active');
	document.getElementById("content").innerHTML = language_versions[4];
}


console.log('%c'+language_versions, languagesMessage);

}