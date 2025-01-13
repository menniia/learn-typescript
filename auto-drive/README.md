# Autonomous Car Simulation in TypeScript

This project is a simple simulation of an **autonomous car** that reacts to obstacle events. The car uses a **steering control system** to navigate around obstacles by turning left or right based on detected events. The simulation demonstrates the use of **TypeScript interfaces**, **class inheritance**, **implementing interfaces**, and **object-oriented principles**.

## What I Learned

In this project, I applied the following TypeScript concepts:

- **Interfaces**: I used interfaces to define the structure of objects, like `AutonomousCar`, `Steering`, and `Events`.
- **Implementing Interfaces**: I implemented interfaces like `Steering` and `Control` in classes to enforce the structure and behavior of objects.
- **Extending Interfaces**: I extended interfaces to create more specialized versions, like `Steering` extending `Control`.
- **Classes and Objects**: I created classes (`Car`, `SteeringControl`) that implement functionality and encapsulate logic, allowing for better abstraction and reusability.
- **Polymorphism**: Through the `respond` method, the car can dynamically react to different events (like obstacles) in a flexible way.

## Project Structure

The project consists of the following main components:

- **`getObstacleEvents` Function**: Simulates the detection of obstacles. It randomly returns whether an obstacle is present on the left or right side of the car.
- **`AutonomousCar` Interface**: Describes the behavior of the car, including its `respond` method for handling events.
- **`Events` Interface**: Describes the structure of events the car can respond to (e.g., `ObstacleLeft`, `ObstacleRight`).
- **`Control` Interface**: Defines a general control interface, which includes the `execute` method.
- **`Steering` Interface**: Extends `Control` to add a specific method (`turn`) for turning the car.
- **`SteeringControl` Class**: Implements the `Steering` interface and provides methods to execute steering commands.
- **`Car` Class**: Implements the `AutonomousCar` interface. It uses the `SteeringControl` class to respond to detected obstacles.

## How It Works

1. **Obstacle Detection**: The `getObstacleEvents` function generates random events representing obstacles on the left or right side of the car.
2. **Car Setup**: An instance of the `Car` class is created with a `SteeringControl` object that implements the necessary steering logic.
3. **Event Response**: The `Car` responds to the events by turning left or right based on whether obstacles are detected on the left or right side.

### Example:

```typescript
import { getObstacleEvents } from "./computer-vision";

// Create a new SteeringControl instance
const steering = new SteeringControl();

// Create a new Car instance with the steering control
let autonomousCar = new Car({ isRunning: true, steeringControl: steering });

// Simulate obstacle events and respond accordingly
autonomousCar.respond(getObstacleEvents());
```
