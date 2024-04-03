// Function to truncate text based on custom attribute
var Webflow = Webflow || [];
Webflow.push(function () {
  // Select all elements with custom attribute "truncate-text"
  $("[truncate-text]").each(function () {
    // Get the max length from the custom attribute
    const maxLength = $(this).attr("truncate-text");

    // Check if text length exceeds max length
    if ($(this).text().length > maxLength) {
      // Truncate text and add ellipsis
      var truncatedText = $(this).text().substring(0, maxLength) + "...";

      // Update element text with truncated text
      $(this).text(truncatedText);
    }
  });
});
