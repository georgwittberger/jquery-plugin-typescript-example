import $ from 'jquery';
import { ExampleService } from './example-service';

// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
$.fn.examplePlugin = Object.assign<ExamplePluginFunction, ExamplePluginGlobalOptions>(
  function (this: JQuery, options: ExamplePluginOptions): JQuery {

    // Merge the global options with the options given as argument.
    options = $.extend({}, $.fn.examplePlugin.options, options);

    // Check if required options are missing.
    if (!options.outputSelector) {
      console.error('Example plugin options are missing required parameter "outputSelector": ', JSON.stringify(options));
      return this;
    }

    // Do what the plugin should do. Here we create an instance of the separate service which is then used when the
    // user clicks the element that the plugin is attached to. It produces a greeting message and appends it to the output.
    let exampleService = new ExampleService();
    this.click(function (event: JQuery.Event<HTMLElement>) {
      let messageText = exampleService.getExampleMessage(event.currentTarget.textContent);
      let messageElement = $('<p>' + messageText + '</p>');
      if (options.outputColor) {
        messageElement.css('color', options.outputColor);
      }
      $(options.outputSelector).append(messageElement);
    });

    // Return the jQuery object for chaining.
    return this;

  },
  // Define the global default options.
  {
    options: {
      outputSelector: null
    }
  }
);
