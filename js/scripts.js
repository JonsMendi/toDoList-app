
/*First of all we create a 'newItem' function that is from the beginning attached on the
button in HTML page named 'Add'. Everthing will happen after cicking this button*/
function newItem() {
  /*First we create a li variable that will display all the input in the webpage.
  Second, to connect the input(or value that the user will insert) on the list
  we create other variable named 'inputValue' that select('$') the #input(id) and is
  value(.val()).
  At last, we append this inputValue to this list elements.*/
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  /*Afterwords we give the conditions for the input value.*/
  if (inputValue === '') {
    alert("Nothing writed");
  }else{
    $('#list').append(li);
  }

  /*Under, we create a function on double click that creates a line-through.
  Here basically it's created a new css class(.strike) with the line-through that
  is activated after double click  */
  li.on('dblclick', function () {
    li.toggleClass('strike');
  });
  /*Under, the crossOutButton is created and added to the 'li'.*/
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  /*Under, the crossOutButton is connected to a new addEventListener on 'click'
  that will delete the li element clicked*/
  crossOutButton.on('click', function () {
    li.addClass('delete');/*OR - instead of  'addClass('delete') we could use 'fadeOut()'
    with some time to animate;'*/
  });

  /*Under, the sortable function allows to drag and replace the li elements*/
  $('#list').sortable();

}
