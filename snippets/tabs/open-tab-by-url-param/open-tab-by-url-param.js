var Webflow = Webflow || [];
Webflow.push(function () {
  const target = "CHANGE_ME";
  const tabName = param(target);
  if (!tabName) return;
  $('[data-w-tab="' + tabName + '"]').triggerHandler("click");

  $("[data-w-tab]").on("click", function () {
    history.pushState({}, "", "?" + target + "=" + $(this).data("w-tab"));
  });

  function param(name) {
    const getParam = new URLSearchParams(document.location.search);
    return getParam.get(name);
  }
});
