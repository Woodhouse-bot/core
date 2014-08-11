import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  value: DS.attr('string'),
  interface: DS.belongsTo('interface'),
  isPassword: function(){
    return this.get('type') === 'password';
  }.property('type'),
  isText: function(){
    return this.get('type') === 'text';
  }.property('type'),
  isBoolean: function(){
    return this.get('type') === 'boolean';
  }.property('type')
});