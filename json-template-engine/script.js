// Define a template using Mustache.js
var template = `
<ul>
  {{#data}}
    <li>Name: {{name}}, Age: {{age}}, City: {{city}}</li>
  {{/data}}
</ul>`;

// Get the 'output' div element where the rendered content will go
var output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
  .then(function(response) {
    // Convert response to JSON
    return response.json();
  })
  .then(function(data) {
    // Render the data using the Mustache template
    var rendered = Mustache.render(template, { data: data });
    
    // Insert the rendered HTML into the 'output' div
    output.innerHTML = rendered;
  })
  .catch(function(error) {
    // Handle any errors that occur during the fetch or rendering process
    console.error('Error:', error);
  });
