const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/output.css', 'public/css', [
       require('tailwindcss'),
   ])
   .version();