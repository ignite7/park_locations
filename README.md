# Park Locations 🏞️

Example made with Google maps API, React and Laravel of how to make a map
that shows the locations and details of the parks you want and slidebar to
filter them.

### Quick setup 🧲

You need to configure your `.env` files.

- Path: `/.env`

  ```env
  MYSQL_ROOT_PASSWORD={{ DB_PASSWORD }}
  MYSQL_DATABASE={{ DB_NAME }}
  ```

- Path: `/ui/.env`

  ```env
  REACT_APP_GOOGLE_KEY={{ GOOGLE_MAPS_API_KEY }}
  REACT_APP_LARAVEL=http://localhost:80/api/v1
  ```

- Path: `/api/.env`

  ```env
  APP_NAME=Laravel
  APP_ENV=local
  APP_KEY={{ YOUR_LARAVEL_KEY }}
  APP_DEBUG=true
  APP_URL=http://localhost

  DB_CONNECTION=mysql
  DB_HOST=db
  DB_PORT=3306
  DB_DATABASE={{ DB_NAME }}
  DB_USERNAME=root
  DB_PASSWORD={{ DB_PASSWORD }}

  REAL_DATA=true
  ```

It's important to know that you will need `docker-compose`.

```bash
# Build the image
sh entrypoints/build.sh

# Run docker compose
docker-compose up -d
```

Then you will have the frontend and the backend running.

```bash
# UI
http://localhost:3000/

# Laravel
http://localhost:80/
```
