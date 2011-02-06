RequireJS Project Template
==========================

This is a simple project as that the RequireJS [optimization section](http://requirejs.org/docs/optimization.html) describes. I've added a simple build.sh that takes one parameter: the project-name. 


## Instructions

Once you have the project cloned

    git clone --recursive https://github.com/georgecalm/requirejs-project-template.git

open **project-one/main.html** in the browser. Notice the number of CSS & JS files that it pulls **(8 in total)**. Then run: 

    ./build.sh project-one 

That will create a directory called **project-one-build/**. Open **project-one-build/main.html** in the browser. You'll see that it will only pull **4 files**. That is because the build-step combines all CSS and JS into the fewest possible number of files.


## More

If you'd like to use **dojo**, take a look at [this template for loading dojo using RequireJS](https://github.com/neonstalwart/dojo-requirejs-template).


## License

# Of RequireJS 

RequireJS 0.22.0 Copyright (c) 2010, The Dojo Foundation All Rights Reserved.
Available via the MIT or new BSD license.
see: http://github.com/jrburke/requirejs for details


# Of This Example

Copyright &copy; 2009 George Calm.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

