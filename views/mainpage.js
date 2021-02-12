function mainpage(posts) {
  return `<html>
    <head>
      <title>Arjan's 2020 Trips</title>
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <h1>Welcome to Arjan's Travel Portal!</h1>
      <br><br>
      ${posts
        .map(
          (post) =>
            `<br><br><div>
        <a href = './trips/${post.id}'>${post.title}</a>
        <br>
        <br><br>${post.comments}
        <br><br>${post.location} | ${post.duration}
        </div>
        <br>`
        )
        .join(' ')}
    </body>
  </html> `;
}

module.exports = mainpage;
