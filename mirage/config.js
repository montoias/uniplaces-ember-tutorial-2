export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/posts', ({db}) => {
    return {'posts': db.posts};
  });

  this.get('/posts/:id', ({db}, request) => {
    return {'posts': db.posts.find(request.params.id)};
  });

  this.post('/posts', ({db}, request) => {
    let params = JSON.parse(request.requestBody).message;

    return {posts: db.posts.insert(params)};
  });

  this.put('/posts/:id', ({db}, request) => {
    var params = JSON.parse(request.requestBody).message;

    return {posts: db.posts.update(request.params.id, params)};
  });

  this.post('/comments', ({db}, request) => {
    var params = JSON.parse(request.requestBody).message;

    return {comments: db.comments.insert(params)};
  });
}
