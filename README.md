<div align="center">
  
![Blinker](https://imgur.com/aS8afyM.png)

[![Hackathon](https://img.shields.io/badge/hackathon-C2C-orange.svg)](http://c2c.acmvit.in) 
[![Status](https://img.shields.io/badge/status-active-green.svg)]() 
[![Github Issues](http://githubbadges.herokuapp.com/exxxor/Blinker/issues.svg?style=flat-square)](https://github.com/exxxor/Blinker/issues) 
[![Pending Pull-Requests](http://githubbadges.herokuapp.com/exxxor/Blinker/pulls.svg?style=flat-square)](https://github.com/exxxor/Blinker/pulls) 
[![License](https://img.shields.io/badge/license-GNU-blue.svg)](LICENSE.md)


</div>


# Table of Content
+ [About](#description)
+ [Getting Started](#getting_started)
+ [Built With](#built_with)
+ [Future Scope](#future_scope)
+ [File Structure](#file_structure)
+ [Contributing](#contributing)
+ [Authors](#authors)

## About<a name="description"></a>
+ Blinker is an application designed o solve a normal problem faced by a large percentage of the population i.e the rate of blinking reduces by 3-4 times when working/reading/watching something on the screen.
+ Our mission is to remind user and help them change their habits.
+ When reading, the rate of blinking decreases to about 3 to 4 times per minute which is a major reason that eyes become    fatigued while reading.
+ When the eyes dry out or become fatigued due to reading on a computer screen, it can be an indication of Computer Vision Syndrome.
+ Blinking provides moisture to the eye by irrigation using tears and a lubricant the eyes secrete.
+ Blinking also protects the eye from irritants.

## Getting Started<a name="getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

Installing NodeJs
```
$ sudo apt-get install nodejs
```
Installing Electron
```
$ npm install electron -g
```
Installing Python3
```
$ sudo apt-get install python3
```
Download the shape_predictor_68_face_landmarks.dat [here](https://github.com/akshaybahadur21/Drowsiness_Detection/raw/master/shape_predictor_68_face_landmarks.dat)

### Installing

A step by step series of examples that tell you how to get a development env running

Cloning the repo
```
$ git clone https://github.com/exxxor/Blinker.git
```
Installing the dependencies
```
$ cd Blinker
$ npm install
$ cd engine
$ pip3 -r install requirements.txt
```
Copy paste the shape_predictor_68_face_landmarks.dat in the /Blinker/engine/ directory
If you are running a development environment, use the following command:
```
$ npm start 
```

The application will now be running in a window on your screen.

## Built With<a name="built_with"></a>
+ [Electron](https://electronjs.org/) - Application framework
+ [Python3](https://www.python.org/) - Engine 

## Future Scope<a name="future_scope"></a>
+ Tracking Body Posture.

## File Structure <a name="file_structure"></a>
/        : Desktop Application code
/engine  : Python application which implements Computer Vision <br>
/images  : All the images used <br>
/linkers : Connection between application and engine <br>
/min     : Minified JS, CSS

## Contributing<a name="contributing"></a>

1. Fork it (<https://github.com/exxxor/Blinker/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Authors<a name="authors"></a>

+ [Chaitanyakrishna Dukkipaty](https://github/chaitanyadukkipaty) <br>
+ [Kyle Lobo](https://github.com/kylelobo) <br>
+ [Roshan James](https://github.com/sephiroth7712) <br>

See also the list of [contributors](https://github.com/exxxor/Blinker/contributors) who participated in this project.
