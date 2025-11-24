# Spring Security EazyBank – Frontend Template  
*Angular client used in the Udemy course “Spring Boot & Spring Security” by Madan Reddy (Eazy Bytes)*

## Overview  
This repository contains the **Angular frontend template** used in the Udemy course by Madan Reddy (Eazy Bytes), focused on Spring Boot and Spring Security.

The course intentionally **does not teach Angular**.  
Instead, the instructor provides a ready-made UI template so students can focus entirely on the backend topics: authentication, authorization, JWT, filters, exception handling, and secure REST API development.

This project is that template.

## Purpose  
The goal of this frontend is to support the backend learning journey by providing:  
- a simple and functional UI,  
- predefined pages and components,  
- an easy way to test login, JWT flow, role-based access, and secure API calls.

It is **not** intended to be a full Angular training project or a production-ready frontend.

## Getting Started  

Clone the repository:

    git clone https://github.com/DubStray/Spring-Security-Eazybank-FE

Navigate into the project:

    cd Spring-Security-Eazybank-FE

Install dependencies:

    npm install

Run the development server:

    ng serve

The app will be available at:

    http://localhost:4200/

Make sure the backend (Spring Boot + Spring Security) is running and configured to allow CORS requests from the Angular dev server.

Technical Notes

    --Built with Angular (matching the version used in the course template).
    --Includes basic routing, components, and UI structure.
    --Integrates with the backend via REST endpoints.
    --Designed as a simple client for authentication and role-based access testing.
    --Not meant to be an Angular tutorial or a deep-dive frontend project.

It exists solely to support the Spring Security training experience.
Backend Integration

To use this template effectively:

    Run the backend from the course (Spring Boot + Spring Security + JWT).

    Configure the API URLs in environment.ts.

    Test:

        login

        JWT issuance and storage

        protected routes

        authorized vs unauthorized access

        role-based features
