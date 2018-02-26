# jQuery Fundamentals

Dan Wahlin
www.pluralsight.com

## Selectors

## Events

## Rich support for AJAX

## eliminates cross-browser issues

## 1. jQuery Fundamentals

## 2. Using jQuery Selectors

## Selectors:
```
# for ID selectors
. for class selection
^ for attributes starting with a value
$ for attributes ending with a value
* for attributes containing a value
```

## 3. Interacting with the DOM

1. Iterating Through Nodes

.each(function(index, Element)) is used to iterate through jQuery objects:
```
$('div').each(function(index) {
    console.log(index + ' = ' + $(this).text());

$('div').each(function(i) {
   this.title = "My Index = " + i;
  })

```

2. Modifying DOM Object Properties

3. Modifying Attributes

Object attributes can be accessed using attr();
```
var val = $('#CustomerDiv').attr('title');
```
Retrieves the value of the title attribute

* attr(attributeName, value)

$('img').attr('title','My Image Title');

Changes the attributes of all image elements

* To modify multiple attributes, pass a JSON object containing name/value pairs:

```
$('img').attr({
    title: 'My Image Title',
    style: 'border:2px solid black;'
  });

```
JSON object passed and used to change title and border.

4. Adding and Removing Nodes

.append()
.appendTo()
.prepend()
.prependTo()

To remove nodes from an element use .remove()

5. Modifying Styles

6. Modifying Classes

.hasClass

.removeClass

onFocus="Focus(this)"

onBlue="Blur(this)"

function Focus(tb) {
  $(tb).toggleClass('Highlight');
}

function Blur(tb) {
  $(tb).toggleClass('Highlight');
}

## Section 4 Handling Events 76m 33s

* Introduction 2m 38s

* jQuery Event Model Benefits 2m 58s

* Using JavaScript to Handle Events Demo

* Handling Events

* Click Event Demo

* Change Event Demo

* Mouse Events Demo

* Binding to Events

* Binding to Events Demo

* live(), delegate() and on()

* Using on() Demo

* Handling Hover Events

* Hover Events Demo

Summary

## Section 5 Working with Ajax Features

* Introduction

* jQuery Ajax Functions

* Loading HTML Content from the Server

* load() Function Demo

* Making GET Requests

* get() Function Demo

* post() Function Demo

* Introduction to the ajax() Function

* ajax() Function Demo

* Summary
