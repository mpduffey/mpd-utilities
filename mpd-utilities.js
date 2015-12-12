angular.module('mpd.utilities', [])
.directive('addClassToChild', function(){
	return {
		restrict:	'A',
		link:	function(scope, elem, attrs) {
			angular.element(elem).children().addClass(attrs.addClassToChild);
		}
	};
});