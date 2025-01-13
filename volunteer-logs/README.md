# Volunteer Activity Tracker

This project is a simple TypeScript application that tracks and manages volunteer activities for two different parks, **Raccoon Meadows** and **Wolf Point**. It demonstrates the use of TypeScript features such as type narrowing, type unions, and arrays to process and calculate the total hours worked by each volunteer.

## What I Learned

In this project, I applied several TypeScript concepts, including:

- **Type Narrowing**: I used type narrowing to work with different types of data (e.g., `string | boolean`) and handle them properly based on their values.
- **Type Unions**: By combining two types of activities (for Raccoon Meadows and Wolf Point), I was able to use a union type to manage the data from both sources.
- **Interfaces and Types**: I used interfaces to structure the volunteer data and activities, making it easier to work with and ensuring the code remains type-safe.

This project helped me improve my understanding of TypeScript’s strong typing system and how it can prevent errors while making development more efficient.

## Project Structure

The project consists of the following main components:

- **Volunteer Data**: Volunteer data is divided into two arrays: `raccoonMeadowsVolunteers` and `wolfPointVolunteers`. Each volunteer has a name, an ID, and a set of activities they've participated in.
- **Volunteer Activities**: Each activity has a description or notes, the time or hours spent on the task, and a verified flag that indicates whether the activity has been verified.
- **Main Functions**:
  - `combineVolunteers`: Combines the volunteer data from both parks into a single array.
  - `calculateHours`: Calculates the total verified hours worked by each volunteer.
  - `sortByHours`: Sorts the volunteers based on the total hours worked in descending order.

The result is a list of volunteers sorted by their total verified hours.
