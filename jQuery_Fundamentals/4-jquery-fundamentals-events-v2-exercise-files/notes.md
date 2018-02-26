# jQuery Fundamentals

## Section 4: Handling Events 76m 33s

## Introduction 2m 38s

## jQuery Event Model Benefits 2m 58s

* Event Attachment Techniques

* Most Browsers
```
myButton.addEventListener('click', function() {}, false);
```

* Internet Explorer
```
myButton.attachEvent('onclick', function() {});
```

* jQuery wraps both functions in one functions .click

## Using JavaScript to Handle Events Demo 3m 20s

## Handling Events 5m 4s

## Click Event Demo 6m 10s

## Change Event Demo 5m 8s

## Mouse Events Demo 9m 11s

## Binding to Events 4m 20s

.on() and .off()

### Using .on()

* .on(eventType, handler(eventObject)) attaches a handler to an event for the selected element(s)

```
$('#MyDiv').on('click',function() {
  //Handle click event
  })
```
// recommended to use .on() rather than .bind()

* off(event) is used to remove a handler previously bound to an getElementById
```
$('#test').click(handler); // can be unbound using
$("#test").off();
```
* Specific events can also be targeted using off():
```
$('#test').off('click');
```

## Binding to Events Demo 5m 34s

## live(), delegate() and on() 10m 49s

## Using on() Demo 7m 8s

## Handling Hover Events 3m 18s

## Hover Events Demo 7m 26s

## Summary 3m 22s
