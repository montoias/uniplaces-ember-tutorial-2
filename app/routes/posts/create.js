import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },

  actions: {
    createPost() {
      this.get('currentModel').save();
    }
  }
});
