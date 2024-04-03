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

3\. Name your tabs in Webflow to match the URL parameter (For example: https://myurl.com/home?tab=office -> will open the tab named "office". \

<img width="243" alt="Screenshot 2024-04-02 at 8 04 20 PM" src="https://github.com/alpineux/wonderflow/assets/99145815/3314efba-f1d7-47f8-b673-c10ce7a56c27">

