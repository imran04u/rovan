 $(document).ready(function() {
                $('#fullpage').fullpage({
                  	menu: '#menu',
				//	anchors: ['about', 'works', 'blog', 'contact'],
                    scrollingSpeed: 1000,

                    afterLoad: function(anchorLink, index){
					if(index == 2){
						$('.aboutexp, .aboutdetails, .aboutportait').addClass('active');
					}

					if(index == 3){
						$('.works-fashion .workimg, .works-fashion .workdetails h3, .works-fashion .workdetails p, .works-fashion a').addClass('active');
						
					scrollElemToWatch_2 = document.getElementById('wrk-1'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -100),
					wrk1 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#48a0ce',
							direction: 'tb',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})
					wrk1.reveal();
					
       
					}

					if(index == 4){
						$('.works-robots .workimg, .works-robots .workdetails h3, .works-robots .workdetails p,.works-robots a').addClass('active');
					scrollElemToWatch_2 = document.getElementById('wrk-2'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -100),
					wrk2 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#303038',
							direction: 'lr',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})
					wrk2.reveal();
					}

					if(index == 5){
						$('.works-eatti .workimg, .works-eatti .workdetails h3, .works-eatti .workdetails p, .works-eatti a').addClass('active');
						
					
					scrollElemToWatch_2 = document.getElementById('wrk-3'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -100),
					wrk3 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#b52352',
							direction: 'tb',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					wrk7 = new RevealFx(document.querySelector('#wrk-4'), {
						revealSettings : {
							bgcolor: '#7f40f1',
							direction: 'bt',
							
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					});
					
					wrk3.reveal();
					wrk7.reveal();
					}
				if(index == 6){
						$('.web-list .introContent').addClass('active');
						
						 
						
				}
				if(index == 7){
						$('.app-list .introContent').addClass('active');
						
						 
						
				}

				}
				

                });

               
            });