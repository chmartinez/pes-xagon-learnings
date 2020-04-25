# pes-xagon
Show the hexagon from PES 

Remember this?

![this](https://i46.servimg.com/u/f46/16/76/97/21/pes6_243.jpg)


Well, the idea is to have the hexagon from PES, but from scratch.


## Goal
To have a web page that draws an animated hexagon like the one from PES.

## Objectives
* ~~Have an hexagon drawn in a web page~~
* Animation to one of the vertices (the figure must change its shape)
* Add a way to start the animation when selecting a vertex
* Let the figure to animate more than one vertex at a time
* Add a way to configure "weights" to each vertex and make the animation depend on that "weight"
* Do it mobile-first (the figure and its configuration)
* Publish the side


## The rules around the PES-xagon
* It's a "regular hexagon" by defect
* Has six vertices
* Each vertex has a "weight" that define its position regarding the center of the pes-xagon
* The min value for any of the vertex weights is 50
* The max value for any of the vertex weights is 100
* The higher the weight, the more far away from the center the vertex will be.


## If I have to draw the initial pes-xagon in a 100x100 x-y axis, where would be the vertices at?
For a (x,y) coordenate, each vertex would be at (don't worry, I did the math):

* V1: (0, -50) 
* V2: (43.30, -25) 
* V3: (43.30, 25) 
* V4: (0, 50) 
* V5: (-43.30, 25) 
* V6: (-43.30 -25)

### Tech chosen
* Rendering: SVG

### What I'm doing right now
* Reading [this](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg193979%28v%3dvs.85%29) so that I can learn how to use SVG.
* Reading https://css-tricks.com/scale-svg/ to understand why does the test img gets a default size of 300x150 px and the inline svg gets a 100% width (and height) 
* Reading https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox so I can learn about viewBox property


## TODO's
- [x] Analyze the math around the hexagons
- [x] Define the rules around the pes-xagon
- [x] Study which technology will fit better
- [x] Reach the 1st goal: _Have an hexagon drawn in a web page_
- [ ]  Reach the 2nd goal: _Animation to one of the vertices (the figure must change its shape)_

## SUB-TODO's
- [x] Understand how SVG polygon works (specially the points)
- [ ] See how to animate one of the points. If it's too hard, then try a different approach.

