function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/members/skills.html',
    controller: 'SkillsController',
    controllerAs: 'skillsCtrl',
    bindToController: true
  };
}