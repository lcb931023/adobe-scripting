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
var duplicateTime = 4;
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
    for ( i = 0; i < duplicateTime; i++)
    {
        dup = groupedSelection.duplicate();
        // If a pivot point is provided, rotate around that
        if (pX !== undefined && pY !== undefined)
        {
            // TODO: Figure out the math for rotation around pivot point. Below are completely wrong maths and they only serve as code examples
            var pivotMatrix = app.getTranslationMatrix (pX, pY);
            pivotMatrix = concatenateRotationMatrix(pivotMatrix, 360/duplicateTime * (i + 1) );
            dup.transform(pivotMatrix);
        } else {
            // if not, rotate around its own anchor point
            dup.rotate(360/duplicateTime * (i + 1) );
        }
    }
    // apparently the variable dup is causing illustrator to crash. Hot fix with nullifying it.
    dup = null;
}

// TODO: Make it ac tually blend objects, not just copy them
