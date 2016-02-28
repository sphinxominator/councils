councils.controller('FabController', ['$scope','$uibModal', function($scope, $uibModal) {
    $scope.actions = [
        {
            modalUrl: 'meetings/modals/meeting.html',
            controller: 'MeetingModalController',
            icon: 'group',
            color: 'green',
            tooltip: 'Nyt møde'
        }
        ,{
            modalUrl: 'meetings/modals/meetingTemplate.html',
            controller: 'MeetingTemplateModalController',
            icon: 'group_work',
            color: 'blue',
            tooltip: 'Ny mødetype',
            requireAdmin: true
        },
        {
            modalUrl: 'roles/modals/list.html',
            controller: 'RolesModalController',
            icon: 'face',
            color: 'yellow',
            tooltip: 'Ny rolle',
            requireAdmin: true
        }
    ];

    $scope.showSpinner = false;

    $scope.open = function (action) {
        $uibModal.open({
            animation: true,
            templateUrl: action.modalUrl,
            controller: action.controller,
            scope: $scope,
            size: "md"
        });
    };
}]);