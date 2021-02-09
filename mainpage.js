function mainpage(posts) {
  return `<html>
    <head>
      <title>Arjan's 2020 Trips</title>
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <h1>main page!</h1>
      <ul>
        ${posts.map(
          (post) =>
            `<li>
          <a href = './trips/${post.id}'>${post.title}</a> ${post.location}
          </li>`
        )}
      </ul>
    </body>
  </html> `;
}

module.exports = mainpage;
