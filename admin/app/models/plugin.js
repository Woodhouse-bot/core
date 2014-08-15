import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  displayname: DS.attr('string'),
  description: DS.attr('string'),
  enabled: DS.attr('boolean'),
  prefs: DS.hasMany('pref'),
  uiMessage: DS.hasMany('uiMessage'),
  enabledClass: function(){
    return this.get('enabled') === true ? 'enabled-true' : 'enabled-false';
  }.property('enabled')
});