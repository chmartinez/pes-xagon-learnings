# pes-xagon
Show the hexagon from PES 

Remember this?

![this](https://i46.servimg.com/u/f46/16/76/97/21/pes6_243.jpg)


Well, the idea is to have the hexagon from PES, but from scratch.


## Current result
![](assets/pes-xagon.svg?raw=true)


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

## The math (i.e: the formula)
To calculate the vertex coordinate, we need to apply two formulas (one for each coordinate). Assuming that we want to calculate the vertex "V" in the 1st quadrant (where *x* and *y* will be always positive):

* For Vx ==> Stat value * sin(30°)
* For Vy ==> Stat value * cos(30°)

## Default pes-xagon sizes
For a **50** stats value in all the six vertices, these are the coordinates of each vertex:
* V1: (0, -50) 
* V2: (43.30, -25) 
* V3: (43.30, 25) 
* V4: (0, 50) 
* V5: (-43.30, 25) 
* V6: (-43.30 -25)

## Max pes-xagon size
For a **100** stats value in all the six vertices, these are the coordinates of each vertex:
* V1: (0 -100)
* V2: (86.60, -50)
* V3: (86.60, 50)
* V4: (0, 100)
* V5: (-86.60, 50)
* V6: (-86.60, -50)

* V1: (0, -50) 
* V2: (43.30, -25) 
* V3: (43.30, 25) 
* V4: (0, 50) 
* V5: (-43.30, 25) 
* V6: (-43.30 -25)

### Tech chosen
* Rendering: SVG

## TODO's
- [x] Analyze the math around the hexagons
- [x] Define the rules around the pes-xagon
- [x] Study which technology will fit better
- [x] Reach the 1st goal: _Have an hexagon drawn in a web page_
- [x]  Reach the 2nd goal: _Animation to one of the vertices (the figure must change its shape)_
- [x] Reach the 3rd goal: _Add a way to start the animation when selecting a vertex (or clicking in a button or smth)_
- [x] Reach the 4th goal: _Let the figure to animate more than one vertex at a time_
- [ ] Reach the 5th goal: _Add a way to configure "weights" to each vertex and make the animation depend on that "weight"_


### SUB-TODO's
- [x] Understand how SVG polygon works (specially the points)
- [x] See how to animate one of the points. If it's too hard, then try a different approach.
- [ ] Add some love to the structure (CSS for section, article, divs?)
- [ ] Start thinking in JS (functions, constants, ways of setting points, calculating vertex positions, etc.)

### Optionals
- [ ] Check what's the difference (and pros/cons) between `polygon` and `path`

## Resources
* [How to use SVG](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg193979%28v%3dvs.85%29)
* [SVG viewBox explanation](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
* [How to scale SVG & use viewBox like a wizard](https://css-tricks.com/scale-svg/)
* [How to use `animate` to animate SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate)
* [How SVG morphing works (with SMIL)](https://css-tricks.com/svg-shape-morphing-works/)
* [How to animate svg path with CSS](https://css-tricks.com/animate-svg-path-changes-in-css/)
* [Animate polygons with JS](https://www.creativebloq.com/how-to/create-and-animate-svg-polygons)
