## Open Tab By Url Parameter in Webflow

1.  Copy and paste this snippet into the body

```javascript
<script>
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
</script>
```

2\. Replace the “CHANGE_ME” to the target URL parameter that will control the tab switching

3\. Name your tabs in Webflow to match the URL parameter
