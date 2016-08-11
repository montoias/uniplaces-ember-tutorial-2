import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('post', params.id);
  },

  actions: {
    createComment() {
      let newComment = this.store.createRecord('comment', {message: 'A'});
      let post = this.get('currentModel');
      post.get('comments').addObject(newComment);

      newComment.save().then(() => {
        post.save();
      });
    }
  }
});
