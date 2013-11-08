Rdio-inspired Grid View
=======================
This is a fork of flisterz rdio-grid http://flisterz.github.io/rdio-grid/. I adjusted the recalculate() function to accept additional parameters for better margin handling. 

This is an attempt to recreate Rdio-style grid view, as seen on their album grid view.
The column count and target width will adjust depending on window size.


###Example
<pre>recalculate(".grid", 175, 15)</pre>

### Usage
<pre>recalculate(target_class, min_width, margin)</pre>

### Options
<table class="table table-bordered table-striped">
        <thead>
         <tr>
           <th style="width: 100px;">Name</th>
           <th style="width: 100px;">type</th>
           <th>description</th>
         </tr>
        </thead>
        <tbody>
         <tr>
           <td>target</td>
           <td>string</td>
           <td>The class of your grid item.</td>
         </tr>
         <tr>
           <td>min_width</td>
           <td>integer</td>
           <td>The min_width desired for your grid item</td>
         </tr>
         <tr>
           <td>margin</td>
           <td>integer</td>
           <td>The margin to be applied to the grid item. </td>
         </tr>
        </tbody>
      </table>


###TODO:
- Find a better margin fix than current "inline-block/margin-left" hack
- fix jumpiness (css animations?)
