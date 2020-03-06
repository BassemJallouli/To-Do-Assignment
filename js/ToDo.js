var table = document.getElementById( 'my-table' ); /* Get the element with id="my-table" */
var tableBody = document.getElementById( 'my-table-body' ); /* Get the element with id="my-table-body" */
var form = document.getElementById( 'my-form' ); /* Get the element with id="my-form" */

// On submit.
form.addEventListener( 'submit', function( event ) { /* related to submit button - add event with function */ 
    event.preventDefault(); // prevent default form submission 

    var name        = document.getElementById( 'name' ).value; 
    
    // Prepare new row element.
    var newRow = document.createElement( 'tr' );

    // Name cell.
    var newColName = document.createElement( 'td' );
    newColName.innerHTML = name;
    newRow.appendChild( newColName );

    // Add new row of cells to table.
    tableBody.appendChild( newRow );

    // Clear values.
    document.getElementById( 'name' ).value = '';
    
} );