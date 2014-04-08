#target illustrator

/*** USAGE ***/
// Act as the Blend functionality inside Illustrator, but
// blends the selected object around a pivot point

/*** PREREQUISITE ***/
// 1. Have a document open in Illustrator
// 2. Select Adobe Illustrator from the drop-down menu above left
// 3. Select the desired item in Illustrator

/*** USER VARIABLES. EDIT THIS PART, YO. ***/
// 1. The number of times the selection will be copied.
var copyTime = 10;
// 2. The coordinate this selection will be copy-rotated around. Default to anchor point of selection
var pivotPoint = {
    //x: 100,
    //y: 100.
}
// Get the active document 
var doc = app.activeDocument;
// the selection
var mySelection = doc.selection;
if (mySelection.length == 0)
{
    alert("Please select the item you want to blend.");
} else {
    rotationalBlend(pivotPoint.x, pivotPoint.y);
}

function rotationalBlend(pX, pY)
{
    
    var groupedSelection = doc.groupItems.add();
    // Group the selection into one object
    for ( i = 0; i < mySelection.length; i++)
    {
        mySelection[i].move(groupedSelection, ElementPlacement.PLACEATEND);
    }
    // Blend such object
    var dup;
    for ( i = 0; i < copyTime; i++)
    {
        dup = groupedSelection.duplicate();
        if (pX !== undefined && pY !== undefined)
        {
            dup.rotate(360/copyTime * (i + 1) );
        } else {
            dup.rotate(360/copyTime * (i + 1) );
        }
    }
    // apparently the variable dup is causing illustrator to crash. Hot fix with nullifying it.
    dup = null;
}

/*
if (pivotPoint.x !== undefined || pivotPoint.y !== undefined)
{
        rotationalBlend(pivotPoint.x, pivotPoint.y);
    } else {
        rotationalBlend (  );
}

function rotationalBlend(pX, pY)
{
    
}
*/

// TODO: Make it ac tually blend objects, not just copy them











/*
// create an empty array to hold anchor points
var myPoints = [];

// get all of the pathItems in the document
var thePaths = myDocument.pathItems;

// process the pathItems (add all anchors to the myPoints array)
processPathItems(thePaths);

// make a new layer
var newLayer = myDocument.layers.add();

// add a rectangle for every point in myPoints
addRects(myPoints);



// visits every PathItem in a PathItems object
// visits every PathPoint in those PathItem objects
// adds the anchor of every PathPoint to the myPoints array
function processPathItems(pathItems)
{
    for(var i = 0; i < pathItems.length; i++)
    {
        var pathPoints = pathItems[i].pathPoints;
        
        for(var j = 0; j < pathPoints.length; j++)
        {
            myPoints.push(pathPoints[j].anchor);
        }    
    }
}

// given an array of points (each point is [x, y] )
// makes a rectangle at that position
function addRects(points)
{
        for(var i = 0; i < points.length; i++)
        {
                makeRect(points[i]);
        }
}

// given an anchor point [x, y]
// create a rectangle centered on that anchor
function makeRect(anchor)
{
    // define the top, left, width, and height of the rectangle
    var top = anchor[1]+2;
    var left = anchor[0]-2;
    var width = 4;
    var height = 4;
    
    // visit newLayer's pathItems array, and add a rectangle object to it
    var rect = newLayer.pathItems.rectangle(top,left,width,height);
    // rect is the rectangle we just created
    
    // 
    rect.filled = false;
    rect.stroked = true;
    rect.strokeColor = black;
    rect.strokeWidth = 0.25;
 }
 
 */