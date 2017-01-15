import { ExampleOptions } from './example.options';
import { ExampleService } from './example.service';

// Define the plugin function
jQuery.fn.examplePlugin = function (this: JQuery, options: ExampleOptions) {
  // Merge the global options with the per-call options
  options = jQuery.extend({}, jQuery.fn.examplePlugin.options, options);

  // Check if required options are missing
  if (!options.outputSelector) {
    console.error('Example plugin options are missing required parameter "outputSelector"', options);
    return this;
  }

  // Do what the plugin should do, here register a click handler
  this.click(function (event: JQueryEventObject) {
    let exampleService = new ExampleService();
    let messageText = exampleService.getExampleMessage(event.target.textContent);
    let messageElement = jQuery('<p>' + messageText + '</p>');
    if (options.outputColor) {
      messageElement.css('color', options.outputColor);
    }
    jQuery(options.outputSelector).append(messageElement);
  });

  // Return the jQuery result for chaining
  return this;
}

// Define the plugin's global default options
jQuery.fn.examplePlugin.options = {};
