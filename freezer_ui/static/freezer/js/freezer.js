/*
# (c) Copyright 2014,2015 Hewlett-Packard Development Company, L.P.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/

/*global angular*/

(function () {
    'use strict';
    angular.module('hz').controller('DestinationCtrl', function ($scope, $http, $location) {
        $scope.query = '';

        $http.get($location.protocol() + "://" + $location.host() + ":" + $location.port() + "/freezer_ui/api/clients").
            success(function (data) {
                $scope.clients = data;
            });
        $scope.searchComparator = function (actual, expected) {
            return actual.description.indexOf(expected) > 0;
        };
    });
}());
