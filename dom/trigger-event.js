function trigger(element, type) {
  var event;
  if (document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    event.eventName = type;
    element.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventName = type;
    event.eventType = type;
    element.fireEvent('on' + event.eventType, event);
  }
}
