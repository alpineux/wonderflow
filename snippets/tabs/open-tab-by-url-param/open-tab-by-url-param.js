var Webflow = Webflow || [];
Webflow.push(function () {
  // Define target constant and get tab name from URL parameter
  const target = "CHANGE_ME";
  const tabName = param(target);
  if (!tabName) return;

  // Trigger click event on tab with matching data-w-tab attribute
  $('[data-w-tab="' + tabName + '"]').triggerHandler("click");

  // Update URL parameter when tab is clicked
  $("[data-w-tab]").on("click", function () {
    history.pushState({}, "", "?" + target + "=" + $(this).data("w-tab"));
  });

  // Function to get URL parameter value
  function param(target) {
    const getParam = new URLSearchParams(document.location.search);
    return getParam.get(target);
  }
});
