var isFirstPage = true;

page('/', function() {
  page.redirect('/what-is-vegemite');
});

page('/:slug', function(context) {
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  var slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  var oldMenuItem = document.querySelector('#menu .is-active');
  var oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  var newMenuItem = document.querySelector('#menu [data-page='+slug+']');
  var newPage = document.querySelector('main [data-page='+slug+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

  //If this is the first time the user is viewing the page, don't move focus. Wait until a menu item is clicked.
  if(isFirstPage) {
    isFirstPage = false;
    return;
  }

  // Set the focus to the heading of the is-active section
  newPage.querySelector('h2').focus();
});

page({
  hashbang: true
});
