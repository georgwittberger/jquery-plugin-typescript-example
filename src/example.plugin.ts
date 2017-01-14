import { ExampleService } from './example.service';

jQuery.fn.examplePlugin = function (this: JQuery, options: any) {
  this.click(function (event: JQueryEventObject) {
    let exampleService = new ExampleService();
    let message = exampleService.getExampleMessage(event.target.textContent);
    alert(message);
  });
  return this;
}