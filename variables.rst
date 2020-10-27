Variables
*********

One of the fundamental concepts of programming is to give a name to a value that we are using.
It is called a variable.

.. figure:: images/vars-two-circles.svg
   :width: 200
   :alt: two circles
   :align: right

For example, take the case of drawing two concentric circles.
::

    circle(150, 200, 100)
    circle(150, 200, 200)

It would be nice to name the values instead of using 100 and 200.

::

    var x = 150;
    var y = 200;
    var d = 100;

    circle(x, y, d);
    circle(x, y, 2*d);

We have used names ``x`` and ``y`` for the coordinates of the center of the circle
and name `d` to denote the diameter of the inner circle. The diameter of the outer
circle is set to double the diameter of the inner circle by using the expression ``2*d``.

**Problem 2.1**

Try the above example in your program and try to move the figure to center ``(200, 250)`` by
changing the values of ``x`` and ``y``.

**Problem 2.2**

Change the above program to draw three concentric circles.

.. figure:: images/three-concentric-circles.svg
   :width: 200
   :alt: three circles

Example: Circles Touching at the Bottom
=======================================

We already know how to draw a circle given the center of the circle.
How about drawing a circle given the coordinated of the bottom most point and the diameter of the circle?

.. figure:: images/vars-bottom-circle.svg
   :width: 200
   :alt: bottom circle
   :align: right

Let us use variables ``bx`` and ``by`` to denote the coordinates of the bottom most point.

::

    function draw() {
        var bx = 200;
        var by = 350;
        var d = 200;

        var cx = bx;
        var cy = by-d/2;

        circle(cx, cy, d);
    }

Functions
=========

Support we want to draw three circles touching at the bottom.

One way to solve that problem is do what we did the above example three times, but that is cumbersome.
Wouldn't it be nice to teach the computer how to draw a circle given the bottom most point?
Yes, we can do that by defining a function.

::

    function bottomCircle(bx, by, d) {
        var cx = bx;
        var cy = by-d/2;

        circle(cx, cy, d);
    }

The above piece of code, just tells the computer how to draw a ``bottomCircle``. We need
to call that function to actually draw something. We would do that in our draw function.

::

    function draw() {
        bottomCircle(200, 350, 200)
    }

.. figure:: images/vars-bottom-circles.svg
   :width: 200
   :alt: bottom circles
   :align: right

If we want to draw three circles touching at the bottom, we can call
the same `bottomCircle` with different arguments.

::

    function draw() {
        var x = 200;
        var y = 350;
        var d = 100;

        bottomCircle(x, y, d);
        bottomCircle(x, y, 2*d);
        bottomCircle(x, y, 3*d);
    }

**Problem 2.3**

Write a function ``leftCircle`` that takes the coordinates of the left most point of the circle
and diameter as arguments and draws the circle. Use that to draw three circles touching on the
left as shown in the figure below.

.. figure:: images/left-circles.svg
   :width: 200
   :alt: circles touching on the left

**Problem 2.4**

Write a function ``circleInSquare`` that takes the top-left coordinates
and width of the sqaures and draws a square and a cicle inside it.

.. figure:: images/circle-in-a-square.svg
   :width: 200
   :alt: circle in a square.

**Problem 2.5**

Write a program to draw the figure given below.

.. figure:: images/two-bottom-circles.svg
   :width: 200
   :alt: two sets of circles touching at the bottom

**Problem 2.6**

Write a program to draw the figure given below.

.. figure:: images/grid-of-touching-cicles.svg
   :width: 200
   :alt: touching circles in a grid

