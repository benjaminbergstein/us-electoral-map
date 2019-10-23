function ApplicationHelper(application) {
  this.application = application;
}

ApplicationHelper.prototype.forEachState = function(callback) {
  var application;
  application = this.application;
  for (var i in application.data) callback(i);
};

ApplicationHelper.prototype.popupTemplate = function(state, data) {
  return '<span style="color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">' + state.properties.name + ": " + data['Electoral Votes'] + '</span>'
};

export default ApplicationHelper;
