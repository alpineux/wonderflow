## Webflow - Open Tab by URL Parameter

This JavaScript code is designed to change the active tab on a Webflow site based on a URL parameter. Here's a breakdown of what the code does:

1\.  It first creates an array called \`Webflow\` if it doesn't already exist, and then pushes a function to it. This function will be executed when Webflow is ready.

2\.  Inside the function, a constant \`target\` is defined, which represents the name of the URL parameter that will be used to determine which tab to activate. You should replace "CHANGE_ME" with the actual name of your URL parameter.

3\.  The function \`param()\` is defined to get the value of a specified URL parameter. It creates a new \`URLSearchParams\` object from the current URL's search query, and then uses the \`get()\` method to retrieve the value of the specified parameter.

4\.  The tab name is obtained by calling the \`param()\` function with the \`target\` constant as an argument.

5\.  If there's no tab name (meaning the URL parameter wasn't found), the function immediately returns to prevent any errors.

6\.  If a tab name is found, the code triggers a click event on the tab element that has a matching \`data-w-tab\` attribute. This attribute should contain the name of the tab.

7\.  An event listener is added to all elements with a \`data-w-tab\` attribute. When one of these elements is clicked, the URL parameter is updated to reflect the newly active tab.

8\.  The function \`param()\` is used to get the value of the URL parameter and then the \`history.pushState()\` method is used to update the URL with the new parameter value. This allows the user to bookmark or share the URL with the specific tab open.
