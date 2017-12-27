# Zenki

 = Rails app using `react_on_rails` gem  with redux =
 
 Deployed to heroku: http://localhost:3000/hello_world
 
  - Ruby Version: 2.4.2
  - Rails Version: 5.1.4
  - Node Version: 9.2.0
  - Database: Postgresql
 
 ## Set up
 1. `bundle install`
 2. `yarn` or `npm install`
 3. `rails db:reset`
 4. `foreman start -f Procfile.dev`
 or manually run in order: `webpack` then `rails s`
 
 ## Note on how this was deployed to heroku
 1. Create app in heroku
 2. Add heroku app remote to this app
 3. Add buildpacks for heroku to know this has node in it.
 `heroku buildpacks:clear && heroku buildpacks:set heroku/nodejs && heroku buildpacks:add heroku/ruby --index 2`
 4. Deploy: `git push heroku master`
