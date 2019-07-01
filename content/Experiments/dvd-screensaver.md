---
title: "DVD Screensaver"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "experiments"
date: "06/04/2019"
displaydate: '2019/05/25'
slug: "dvd-screensaver"
byline: "Remember when the dvd logo almost hit a corner? Travel back to a simpler time with a html only screensaver"
---
<div class="container" style="  background-color: #111;
  height: 100vh;
  max-height: 500px;
  width: 100%;">
	<marquee behavior="alternate" direction="down" width="100%" height="100%">
    	<marquee behavior="alternate" direction="left" width="100%">
			<div class="dvd-logo" style=" display: block;
			  background: url(http://www.clipartbest.com/cliparts/aTq/odB/aTqodBo8c.png), red;
			  height: 70px;
			  width: 158px;
			  background-size: cover;
			  background-repeat: no-repeat;"></div>
	    </marquee>
	</marquee>
</div>

```html
<marquee behavior="alternate" direction="down" width="100%" height="100%">
  <marquee behavior="alternate" direction="left" width="100%">
    <div class="dvd-logo"></div>
  </marquee>
</marquee>
```

https://codepen.io/scottweiss/pen/gLOLdY