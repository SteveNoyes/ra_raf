 ## Table of contents

- [Overview](#overview)
  - [Notes](#notes)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Featured Section](#featured-section)
  - [Useful resources](#useful-resources)

## Overview

Raffle
======

HTML and Javascript Raffle System

How To Use
-----------

In js/names.js you can add a pre-made list of names to be used in the raffle. You do this by defining an array of JSON objects. Each JSON object must contain a name, and can optionally contain points.

	var imported = [
		{
			name: 'Fred',
			points: 3
		},{
			name: 'Ryan',
			points: 2
		},{
			name: 'Sherry'  //no points defaults to 1
		},{
			name: 'Amanda',
			points: 3
		}
	];

Otherwise when you load index.html it will have a text field in which you can enter names separated by new lines.

Once the raffle has been loaded you start it by clicking anywhere on the page!

Using a Google Form
-------------------

Create a google form that collects the First Name and Last Name, or just the Name of participants (along with whatever other information you want to collect)

Example form: <a href='https://docs.google.com/forms/d/1ZGtXQ7ubSlp9RkSAyw582s0i0EPmxQMDTJSP6UdaD7s/edit'>form</a>.

View the responses of the form as a google spreadsheet and go to file->publish to the web. Click the publish button.

Get the spreadsheet key, which is after the /d/ in the url. In the example form the spreadsheet backing the responses has a spreadsheet key of:

	1ZGtXQ7ubSlp9RkSAyw582s0i0EPmxQMDTJSP6UdaD7s
	
Put that key in the query string of the raffle page as the key, for example:

<a href="http://stringham.me/raffle?key=1ZGtXQ7ubSlp9RkSAyw582s0i0EPmxQMDTJSP6UdaD7s">http://stringham.me/raffle?key=1ZGtXQ7ubSlp9RkSAyw582s0i0EPmxQMDTJSP6UdaD7s</a>

Whenever someone submits to the form they will be automatically added to the raffle when the page is loaded. Awesome.

### Notes 

Database of everyone that will be signing in. 

When they sign in they will be in their own prize selection area.

Each person gets 15 tickets. 

There will be 27 prizes.

Each person can put as many of their tickets into any prize they want.
  if they select a prize their ticket count goes down.

All ticket selections get an ID number so you know whos they are.

The raffle is drawn for each prize. All the tickets for each prize will be drawn from and reduced down to one. 

Make a GUI for selection and drawing. 

### Screenshot

![](./screenshot.jpg)

![](./screenshot.jpg)

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repo](https://your-solution-url.com)
- Live Site URL: [GitHub Pages](https://pages.github.com/)

## My process

### Built with

- HTML5 markup
- CSS  
- Vanilla JavaScript
- Mobile-first workflow

### Featured Section

```html
```

```css
```

```js
```

### Useful resources

- [Title](https://www.site.com) - Lorem ipsum dolor sit amet consectetur, adipisicing elit.

- [Title](https://www.site.com) - Lorem ipsum dolor sit amet consectetur, adipisicing elit.

- [Title](https://www.site.com) - Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
