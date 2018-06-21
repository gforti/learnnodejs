# Assignments Lesson 3

## Create a simple pug page

Create a simple form that will collect the following fields. (No validation needed)
 - Label = Full Name, name = fullname 
 - Label = Email, name = email

On the submit page display the results of the entered fields with bold labels to a results page.
 - Use the strong tag for the labels
 - Use paragraph tags to separate the content.
 - Make sure to have the navigation links as well.


## Create a simple API page

Use the following function to send the data as an API

```js
function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};
```

Create a simple route called `/home`

Send a hard-coded JSON object with the following information

```js
{
    "addressLine1" : '',
    "city": '',
    "state": '',
    "zip" : ''
}
```

Visiting this route should just display the JSON content. If you notice the JSON does not look correct add this to the app.js file.

```js
// used to display the json in pretty print format
app.set('json spaces', 2);
```

## Create a simple middleware

Create a middleware that will update the `request` with a custom page title that will be used on the index page.  The title should read "Title created by [your name]"  This title should be displayed with a h1 tag.

```js
app.use(function(reg, res, next){
    
    next();
});
```