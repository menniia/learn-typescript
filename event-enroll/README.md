# TypeScript Union Example

This project demonstrates the usage of TypeScript **unions** in a simple event management system for courses and study groups.

## Project Overview

The project contains three main files:

- **courses.ts**: Defines a list of courses with details such as `id`, `studyGroupId`, `title`, `keywords`, and `eventType`.
- **studyGroups.ts**: Defines a list of study groups associated with the courses, with similar properties like `id`, `courseId`, `title`, `keywords`, and `eventType`.
- **index.ts**: Contains the main logic to search for courses or study groups based on specific queries, and enroll users in selected events.

The primary focus is to demonstrate TypeScript's **union types** by combining the `Course` and `StudyGroup` types in various operations.

## Features

- **Union Types**: The code uses unions to handle both `Course` and `StudyGroup` types seamlessly.
- **Search Functionality**: Users can search for courses or study groups based on a query that can be either a string or a number.
- **Enrollment**: Allows enrolling in a specific event (either a course or a study group).
