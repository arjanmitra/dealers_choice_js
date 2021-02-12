function detailspage(details) {
  return `<html>
    <head>
      <title>Arjan's ${details[0].title}</title>
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <br>
      <h1>${details[0].title}</h1>
      <br><br><br><br><br>
      <div id = "details">
        ${details
          .map(
            (post) =>
              `
              <br><br><br><br>
          <h2>${post.name}</h2> <br>
          <h4>${post.comments}<h4>
          <img src= ${post.picture}>
          `
          )
          .join(' ')}
      </div>
      <h2><a href='/trips'>Back</a>
    </body>
  </html> `;
}

module.exports = detailspage;
