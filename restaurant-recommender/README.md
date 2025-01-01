# Restaurant Recommender

A simple TypeScript program that recommends a restaurant from a list of options based on various filters such as price range, delivery time, distance, and availability. The program aims to provide customers with restaurant suggestions that match their preferences.

## Features

- Filters restaurants based on the following criteria:
  - **Price Range**: Compares the restaurant's price bracket to the current user's price range.
  - **Delivery Time**: Filters out restaurants that take longer than the specified delivery time.
  - **Distance**: Ensures the restaurant is within a specified maximum distance.
  - **Availability**: Checks if the restaurant is open based on the current hour.
- Returns a list of matching restaurants or a message stating that no restaurants are available.

## Problem Overview

Initially, the program didn't recommend any restaurants or provided incomplete information. The main issues were:

- Type errors in the filter logic
- Missing validation and transformation of values

With improvements, the program now filters and recommends restaurants correctly based on the given criteria.
