// Sample data object
const data = {
  title: "Welcome to Dynamic Template Engine",
  content:
    "This engine allows you to render dynamic data directly into your HTML templates. It is designed for easy customization and integration with various web applications.",
  author: "Kareena Kunwar",
  date: new Date().toLocaleDateString(),
  footerText: "Powered by Custom JavaScript Template Engine",
};

// Function to render the template
function renderTemplate(template, data) {
  for (const key in data) {
    const regex = new RegExp("{{" + key + "}}", "g");
    template = template.replace(regex, data[key]);
  }
  return template;
}

// HTML template with placeholders
const template = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p><i>Published on: {{date}}</i></p>
    <p>Author: {{author}}</p>
`;

// Rendering the template into the #app element
const app = document.getElementById("app");
app.innerHTML = renderTemplate(template, data);

// Add footer content dynamically
const footer = document.querySelector("footer p");
footer.textContent = data.footerText;
