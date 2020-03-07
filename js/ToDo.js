var table = document.getElementById( 'my-table' ); /* Get the element with id="my-table" */
var tableBody = document.getElementById( 'my-table-body' ); /* Get the element with id="my-table-body" */
var NewtableBody = document.getElementById( 'new-table-body' ); /* Get the element with id="my-table-body" */



var form = document.getElementById( 'my-form' ); /* Get the element with id="my-form" */

// On submit.
form.addEventListener( 'submit', function( event ) { /* related to submit button - add event with function */ 
    event.preventDefault(); // prevent default form submission 

    var name        = document.getElementById( 'task' ).value; 
    
    // Prepare new row element.
    var newRow = document.createElement( 'tr' );

    // add check box
    
    // Checkbox cell.
    var newColName = document.createElement( 'td' );
    newColName.innerHTML = "<input type=\"checkbox\">";
    newRow.appendChild( newColName );
    
    // Name cell.
    var newColName = document.createElement( 'td' );
    newColName.innerHTML = name;
    newRow.appendChild( newColName );

    

    // Add new row of cells to table.
    tableBody.appendChild( newRow );

    // Clear values.
    document.getElementById( 'task' ).value = '';

    var checkboxes = document.querySelectorAll('#my-table-body input'); /* Get the element with id="new-table-body" */
    
    for (var i=0; i < checkboxes.length; i++)
        {
        var checkbox = checkboxes[i];
        checkbox.addEventListener('click', function( event ) {

        
        var tr=this.parentNode.parentNode;
        console.log('click');
        NewtableBody.appendChild( tr ); 

        
        });
        }
    
} );

