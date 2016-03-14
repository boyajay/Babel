angular.module('LanguageFactory', [])
.factory('Language', function($http) {

  var choices = [ 
    {name: 'English, US', value:'en-US'},
    {name: 'Afrikaans', value:'ar-SA'},
    {name: 'Bulgarian', value:'bg'},
    {name: 'Arabic', value:'ar-SA'},
    {name: 'Czech', value:'cs'},
    {name: 'Dutch', value:'nl-NL'},
    {name: 'French', value:'fr-FR'},
    {name: 'German', value:'de-DE'},
    {name: 'Hebrew', value:'he'},
    {name: 'Hungarian', value:'hu'},
    {name: 'Indonesian', value:'id'},
    {name: 'Italian', value:'it-IT'},
    {name: 'Japanese', value:'ja'},
    {name: 'Korean', value:'ko'},
    {name: 'Mandarin Chinese', value:'zh-CN'},
    {name: 'Malaysian', value:'ms-MY'},
    {name: 'Portugese', value:''},
    {name: 'Russian', value:'ru'},
    {name: 'Spanish', value:'es-US'},
    {name: 'Swedish', value:'sv-SE'},
    {name: 'Turkish', value:'tr'},
    {name: 'Zulu', value:'zu'},
  ];

  var selectedLanguages = {lang1: null, lang2:null};

  function set(lang1, lang2) {
   selectedLanguages.lang1 = JSON.parse(lang1);
   selectedLanguages.lang2 = JSON.parse(lang2);
  }

  function get() {
    return selectedLanguages;
  }

  return {
    selectedLanguages: selectedLanguages,
    choices: choices,
    set: set,
    get: get
  }      

});