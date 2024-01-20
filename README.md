## 1. Description

The Forum-API is an Adonis JS backend project provided by Codepolitan to complement the "Learn to Build RESTful with AdonisJS" course. It provides a collection of APIs designed to manage users, categories, threads, and replies.


## 2. Features

- User Registration and Login
- Token-based authentication
- Category Management
- Thread Managament
- Reply Posting to threads

## 3. Technologies Used

1. Adonis JS
2. MySQL
3. Node.js
4. Yarn
5. Postman

## 4. Getting Started

To install this project, you will need to have on your machine :
1. Node.js
2. NPM / Yarn
3. MySQL database

After that, follow this steps:
1. Clone the repository:
```
https://github.com/OrNixz/forum-api.git
```
or you can download it manually.

2. Install dependencies:
```
cd forum-api
npm install
```
3. Create MySQL database and configure the database connection in the `.env` file.
4. Run migrations and seeders:
```
node ace migration:run --seed
```
5. Run the applicaton:
``` 
node ace serve --watch
```
The application will usually run at `http://localhost:3333`.

## 5. API Endpoints

|   Name   | Method |               URL               |                         Description                        |
|:--------:|:------:|:-------------------------------:|:----------------------------------------------------------:|
| register | POST   | /api/auth/register              | Creates a new user and returns an authentication token.    |
| login    | POST   | /api/auth/login                 | Validates credentials and returns an authentication token. |
| thrad    | GET    | /api/threads                    | Retrieve a list of all threads.                            |
| thread   | POST   | /api/threads                    | Create a new thread.                                       |
| thread   | PUT    | /api/threads/:id                | Update an existing thread.                                 |
| thread   | DELETE | /api/threads/:id                | Delete a thread                                            |
| reply    | POST   | /api/threads/:thread_id/replies | Post a new reply to a thread.                              |

## 6. Screenshots

1. Register

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/register.png)

2. Login

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/login.png)

3. Create Threads

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/post-threads.png)

4. View Spesific Thread

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/get-threads-show.png)

5. View Whole Threads
   
   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/get-threads-index.png)

6. Update Thread

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/post-threads.png)

7. Delete Thread

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/delete-threads.png)

8. Unauthorized User to Update Thread
   
   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/unauthorized-put-threads.png)

9. Unauthorized User to Delete Thread

   ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/unauthorized-delete-threads.png)

10. Create Reply

    ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/post-replies.png)

11. View Threads with Default Pagination

    ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/get-threads-pagination-1.png)

12. View Threads with Custom Pagination

    ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/get-threads-pagination-2.png)

13. View Threads with Custom Pagination + Filtering
    ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/get-threads-pagination-filtering.png)

14. View Threads with Custom Paginatoin + Filtering + Ordering
    
    ![](https://github.com/OrNixz/forum-api/blob/main/screenshots/get-threads-pagination-filtering-ordering.png)
    
