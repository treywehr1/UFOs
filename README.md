# UFOs

## Project Overview
The purpose of this project was to design an interactive table to discover specific UFO sightings from across the world. With common curiosities involving UFO sightings being the "where" and the "when" of the event, it seemed imperative that users would be able to filter UFO sighting data by date and city/state/country. For those curious about more descriptive aspects of the sightings; shape of the described UFO is also a filterable aspect of the data.

## Results
As shown below, a user of this interactive table would only need to perform any changing action on the filter inputs located on the left of the page to attempt their search criteria. If their input is contained for that column in the data - upon clicking out of the input boxes or pressing enter to complete a changing action - the table will then filter itself accordingly. Within the code syntax, this is dictated by executing a d3.selection.on() method in order to execute the filter, using javascript functions, on any "change" within the input (shown below).

Other touches, like adding an introductory paragraph within the HTM <body></body> tag, make the application even more immersive and focused.

![Imgur](https://imgur.com/14V1TPC.png) ![Imgur](https://imgur.com/UySfHJy.png)

![Imgur](https://imgur.com/k5ctGjg.png) ![Imgur](https://imgur.com/ewYwdGT.png)

## Summary
### Drawbacks
One limitation of this application is the limited data set. With so few recorded incidents, it is hard to input acceptable filter parameters. For example, with so many possible date inputs to submit, there is only one month in one year that will actually yield a succesful query (01/X/2010). Another drawback more specific to the web page itself is that it is not great for storing a user's query. This could be potentially fixed with one of my suggested ammendments.

### Further Development
For further development, it might be beneficial to install a "publish" action that will actually save a filtered version of the table and download it off of the webpage as a new csv/dataset. The code required to do so is a bit beyond the current scope of this project, but would be a tremendously beneficial addition to the web page in the future.

Of course, continuing to collect further data and implement a larger array of UFO sightings into this web page would yield a more comprehensive and fulfilling user experience. 

## Conclusion
This project is a great initiation into interactive web page building, and is loaded with potential to implement more event-catching code that would further increase it's usefulness and engagement!
