(function(){
  var infopop = function(message){
    var infodiv = document.createElement('div'),
        timer = null;
    infodiv.style.width = '400px';
    infodiv.style.backgroundColor = '#efe';
    infodiv.style.border = '1px solid #7c7';
    infodiv.style.padding = '10px';
    infodiv.style.margin = '20px';
    infodiv.style.borderRadius = '10px';
    infodiv.innerHTML = message;
    document.body.appendChild(infodiv);
    timer = window.setTimeout(function(){
      document.body.removeChild(infodiv);
    }, 3500);
  };
  var saveOptions = function () {
    saveAlsoHideLogo();
    saveAlsoHideSearchbar();
    saveAlsoHideNavbar();
    infopop('Settings saved!');
  };
  var setOption = function( key, value, cb ) {
    if ( typeof cb !== 'function' ) cb = function(){};
    console.log(key);
    console.log(value);
    console.log(cb);
    chrome.storage.sync.set({key: value}, cb);
  };
  var getOption = function(key, cb) {
    if (typeof key === 'string' ) key = [key];
    chrome.storage.sync.get(key, function(res){
      console.log(res);
      cb(res);
    });
  };
  var saveAlsoHideLogo = function () {
    chrome.storage.sync.set({'cbAlsoHideLogo': document.getElementById('cbAlsoHideLogo').checked}, function() {
    });
  };
  var saveAlsoHideSearchbar = function () {
    chrome.storage.sync.set({'cbAlsoHideSearchbar': document.getElementById('cbAlsoHideSearchbar').checked}, function() {
    });
  };
  var saveAlsoHideNavbar = function () {
    chrome.storage.sync.set({'cbAlsoHideNavbar': document.getElementById('cbAlsoHideNavbar').checked}, function() {
    });
  };
  chrome.storage.sync.get(['cbAlsoHideLogo','cbAlsoHideSearchbar', 'cbAlsoHideNavbar'], function(obj) {
    if (obj.cbAlsoHideLogo && obj.cbAlsoHideLogo == true ) document.getElementById('cbAlsoHideLogo').checked = true;
    else document.getElementById('cbAlsoHideLogo').checked = false;
    if (obj.cbAlsoHideSearchbar && obj.cbAlsoHideSearchbar == true ) document.getElementById('cbAlsoHideSearchbar').checked = true;
    else document.getElementById('cbAlsoHideSearchbar').checked = false;
    if (obj.cbAlsoHideNavbar && obj.cbAlsoHideNavbar == true ) document.getElementById('cbAlsoHideNavbar').checked = true;
    else document.getElementById('cbAlsoHideNavbar').checked = false;
  });
  document.getElementById('btnSave').onclick = saveOptions;
})();
