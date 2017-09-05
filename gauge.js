angular.module('hakoiko.gauge', []).directive('gauge', function() {
	var template = '<div class="gauge"></div>';

	return {
		template: template,
		replace: 'true',
		scope: {
			ngModel: '='
		},
		link: function(scope, el, attrs) {
			var valuesTotal = 0;
			scope.ngModel.forEach(function(item) {
				valuesTotal += item.value;
			});
			//console.log('GAUGE.SCOPE.NG-MODEL:', scope.ngModel);
			function setSeries(series) {
				series.forEach(function(model, i) {
					el.append('<span class="' + model.cls + '"></span>');
				})
			}

			function setSeriesData(series, source) {
				series.forEach(function(model, i) {
					angular.element(document.querySelector('.' + model.cls)).css({
						'width': model.value/valuesTotal * 100 + '%',
						'z-index': source.length - i
					});
				})
			}

			setSeries(scope.ngModel);
			scope.$watch('ngModel', function(newval) {
				setSeriesData(scope.ngModel, newval);
			});
		}
	};
});