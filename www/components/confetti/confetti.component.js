(function(){
	angular.module('studentaccess').component('confetti',{
		replace: true,
		template: '<canvas id="{{::$ctrl.canvasId}}" style="position: absolute;display: block;width: 100%;z-index: -10;height: 100%;" ng-show="::$ctrl.showConfetti"></canvas>',
		controller: ['$log','$timeout', function($log,$timeout){
			var $ctrl = this;
			$ctrl.canvasId = 'canvasId' + Math.floor((Math.random() * 1000) + 1);
			//a number between 1 and 1000 so the probability of a repeating number as id betwwen dif canvas es is smaller
			//if there is two elements with the same id, the second one wont appear
			//we dont want repeating id's

			$log.debug('confetti: init');//everything loaded
			$log.debug("confetti: id = '" + $ctrl.canvasId + "'");

			//to make sure today and birthday are both not undefined
			$timeout(function(){
				if(typeof $ctrl.today === 'string' && typeof $ctrl.birthday === 'string' && $ctrl.today === $ctrl.birthday){
					(function(id) {
						$log.debug('confetti: confetti()');
						var ctx = document.getElementById(id).getContext("2d");

						//canvas dimensions
						var W = window.innerWidth;
						var H = window.innerHeight;

						//snowflake particles
						var mp = 60; //max particles
						var particles = [];
						for (var i = 0; i < mp; i++) {
							particles.push({
								x: Math.random() * W, //x-coordinate
								y: Math.random() * H, //y-coordinate
								r: Math.random() * 15 + 1, //radius
								d: Math.random() * mp, //density
								color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
								tilt: Math.floor(Math.random() * 5) - 5
							});
						}

						//Lets draw the flakes
						function draw() {
							ctx.clearRect(0, 0, W, H);

							for (var i = 0; i < mp; i++) {
								var p = particles[i];
								ctx.beginPath();
								ctx.lineWidth = p.r;
								ctx.strokeStyle = p.color; // Green path
								ctx.moveTo(p.x, p.y);
								ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
								ctx.stroke(); // Draw it
							}

							update();
						}

						//Function to move the snowflakes
						//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
						var angle = 0;

						function update() {
							angle += 0.01;
							for (var i = 0; i < mp; i++) {
								var p = particles[i];
								//Updating X and Y coordinates
								//Every particle has its own density which can be used to make the downward movement different for each flake
								//Lets make it more random by adding in the radius
								p.y += Math.cos(angle + p.d) + p.r / 2;
								p.x += Math.sin(angle) * 2;

								//Sending flakes back from the top when it exits
								//Lets make it a bit more organic and let flakes enter from the left and right also.
								if (p.x > W + 5 || p.x < -5 || p.y > H) {
										if (i % 3 > 0) {//66.67% of the flakes
											particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, tilt: p.tilt };
										} else {
											//If the flake is exitting from the right
											if (Math.sin(angle) > 0) {
												//Enter from the left
												particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: p.tilt };
											} else {
												//Enter from the right
												particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: p.tilt };
											}
										}
									}
							}
						}

						//animation loop
						setInterval(draw, 20);
					})($ctrl.canvasId);
					$ctrl.showConfetti = true;
					$log.debug('confetti: showing');
				} else {
					$ctrl.showConfetti = false;
					$log.debug('confetti: not showing');
				}
				$log.debug('confetti: ' + $ctrl.today + ' vs ' + $ctrl.birthday);
			},1500);
		}],
		bindings: {
			today: '=',
			birthday: '='
		}
	});
})();
