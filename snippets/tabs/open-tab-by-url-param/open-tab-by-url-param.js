var Webflow = Webflow || [];
Webflow.push(function () {
  var tabName = param("CHANGE_ME");
  if (!tabName) return;
  $('[data-w-tab="' + tabName + '"]').triggerHandler("click");

  function param(name) {
    const query = window.location.search;
    return new URLSearchParams(query);
  }
});
