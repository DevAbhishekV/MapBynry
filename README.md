# MapBynry - Profile Management and Geolocation Web Application

## Overview

MapBynry is a practice project designed to demonstrate fundamental web development skills, focusing on client-side data management and geolocation visualization. This web application allows users to:

* **Create, Edit, and Delete Profiles:** Manage user profiles with detailed information.
* **Visualize Locations on a Map:** Display profile locations using latitude and longitude coordinates.
* **Update Geolocation:** Modify the latitude and longitude associated with a profile.
* **Search and Filter:** Efficiently locate profiles by name or location.

**Note:** Due to the absence of a persistent database (e.g., PostgreSQL), profile data and updates are stored in browser cookies. Refreshing the page will reset the application to its default state.

## Features

* **Profile Management:**
    * Intuitive interface for adding new profiles.
    * Ability to edit existing profile details.
    * Functionality to delete profiles.
* **Geolocation Integration:**
    * Display of profile locations on an interactive map.
    * Real-time update of latitude and longitude coordinates.
* **Search and Filtering:**
    * Search profiles by name.
    * Filter profiles by location.
* **Client-Side Data Storage:**
    * Utilizes browser cookies for temporary data persistence.

## Technologies Used

* **HTML:** For structuring the web page.
* **CSS:** For styling and layout.
* **JavaScript:** For application logic, data manipulation, and map integration.
* **Mapping Library:** (Specify the mapping library used, e.g., Leaflet, Google Maps API)

## Setup and Usage

1.  open vs code start terminal write npm start

## Limitations

* **Temporary Data Storage:** Profile data is stored in browser cookies, resulting in data loss upon page refresh.
* **No Server-Side Persistence:** The application lacks a backend database, limiting its scalability and data persistence.
* **Mapping Library Details:** Please add the mapping library that was used, like leaflet or google maps api.

## Future Enhancements

* **Database Integration:** Implement a server-side database (e.g., PostgreSQL, MongoDB) for persistent data storage.
* **User Authentication:** Add user authentication and authorization for secure profile management.
* **Improved User Interface:** Enhance the UI/UX for a more intuitive and user-friendly experience.
* **Advanced Mapping Features:** Incorporate advanced mapping features, such as custom markers, overlays, and geocoding.
* **Server Side validation**: Add server side validation to improve data security.
