# Modulus Pro Theme

![Title](screenshot.png)

Modular starter child theme with Sass partials for the Genesis Framework, originally based on the Genesis Sample Theme version 2.7.1, but updated as new revisions are available from Studiopress are available. The latest version of this theme requires the **Genesis Framework 2.8+** and PHP 7.1+ (preferrably 7.2 for [security](http://php.net/supported-versions.php)). 


## Installation Instructions

### Zip File

1.  Download the .zip-file into the `wp-content/themes/` folder.
2.  Extract it.
3.  Make sure the Genesis parent theme is in the `wp-content/themes/` directory.
4.  Activate the Modulus Pro child theme from the WordPress dashboard.

### Clone the Repository

1.  Open `wp-content/themes/` of your project in a terminal window.
2.  Type: `git clone https://github.com/polishedwp/Modulus-Pro.git`.
3.  Activate the theme from the WordPress dashboard.

## Features  
Modular starter child theme with Sass partials for the Genesis Framework, originally based on the Genesis Sample Theme version 2.8. The theme will continue to be updated for revisions to Genesis Sample. 


## Usage Notes - Please read

1.  The child theme has a more modular structure.
    Instead of cramming everything into functions.php, the code is spread over multiple files.
2.  The child theme uses a simple autoloader (see `/lib/functions/autoload.php`).
4.  Woocommerce and additional functionality are deactivated but can easily be activated by uncommenting the files in the autoloader config.
5.  AdSense settings are deactivated in `/lib/admin/remove-adsense.php` and in `/lib/components/customizer/remove-adsense.php`.
6.  The Sass partials for the theme are located in `/assets/sass`. 
8.  Gulp commands are available to compile Sass, minify the stylesheet, and compile sourcemaps.

    Please open `/assets/gulp/project-config.js` and configure your project settings.

    To use Gulp, you can either just type `gulp` in a terminal window or take a look at the available commands in `gulpfile.babel.js`.

    Please be aware that the Javascript minifier expects ES5 syntax.
    

10. The minified stylesheet is loaded from `/lib/functions/load-minified-css.php`. Unminified JavaScript files are loaded if `SCRIPT_DEBUG` is set to true in `wp-config.php`.


## Developers 

### Gulp
Gulp has been included (version 4). If you have Gulp 3 installed globally, please use the [npm scripts in package.json](https://github.com/polishedwp/Modulus-Pro/blob/develop/package.json) to run the Gulp 4 tasks, e.g. `npm run gulp`. This theme will only support Gulp 4 going forward.   

### Sass  
* The SASS partial folder structure has been designed to mimic the structure of the default Genesis Sampe stylesheet. This structure was adopted to maintain the theme based on the Genesis Sample Theme updates. 
* By default, MOdulus Pro does not use SASS partials of the minified stylesheet. Remember, if you choose to use them, you can load the minified stylesheet by enabling `/lib/functions/load-minified-css.php` in the autoloader.   

### ToDo 
* Add theme Options Panel to the Customizer
* Add menu location options to Customizer 
* Add Sticky header option to Customizer 
* Develop Frontpage template 

## Special Credit and Thank you

I want to specifically thank a few developers. 

* [@srikat](https://github.com/srikat) - I have learned a lot from his tutorials and comments over the years and I appreciate inspiration. 
* [@christophherr](https://github.com/christophherr) - Thank you Christoph Herr for [Promethus 2](https://github.com/christophherr/prometheus). My first view of a modular child theme inspired me.
* [Tonya Mork](https://github.com/hellofromtonya) - I have learned so much on [KnowtheCodePro](http://knowthecode.io/) and I appreciate the inspiration and the lessons to think differently about code. 


