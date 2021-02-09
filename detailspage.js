function detailspage(details) {
  return `<html>
    <head>
      <title>Arjan's ${details.name}</title>
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <h1>main page!</h1>
      <ul>
        ${details.map(
          (post) =>
            `<li>
          ${post.name} ${post.comments}
          <img src= ${post.picture}>
          </li>`
        )}
      </ul>
    </body>
  </html> `;
}

module.exports = detailspage;
