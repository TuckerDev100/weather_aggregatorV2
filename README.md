# To start

Download the project. 

Ensure that nothing is currently running on port 3300

CD into the src/weather_aggregator folder

run the command "npm start"

go to 

http://localhost:3300/location/80303

and replace 80303 with whatever Zip Code you like.

Get weather info for the week!

# Roadmap
If I were to continue working on it I would implement the tests that I had made the framework for. I started by writing tests after each function, but after I found out the final endpoint I wanted to use was deprecated, I had to refactor and ran out of time.

I would also add a retry functionality. The final hourlyWeatherData endpoint in particular has a habit of giving a 500 error at random. I would have retried for 30 seconds before sending a final 500 error.

It could also do with an error handling helper service to clean up the locationController. Too many lines dedicated to errors, error handling ought to be abstracted away!

And last but not least, the .env file should be added to the gitignroe. I will destroy the key later, it just seemed rude to make you guys get your own key ¯\_(ツ)_/¯
