source 'https://rubygems.org'

#server
ruby '2.3.1'
gem 'rails', '5.0.0.1'
gem 'pg'
gem 'passenger', '>= 5.0.25', require: 'phusion_passenger/rack_handler'
gem 'rack-cors'
gem 'active_model_serializers', '~> 0.10.0'
gem 'paper_trail', '~> 4.0.0'
gem 'sprockets'
gem 'execjs'
gem 'actionpack-page_caching', git: 'https://github.com/rails/actionpack-page_caching.git'

#pre-processing
gem 'haml'
gem 'sass-rails', '5.0.5'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'react_on_rails', '~> 6'
gem 'turbolinks', '~> 5.0.0'

#assets
gem 'googleauth'
gem 'google-api-client', '0.9.pre4'

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.1.0'
end

#account
gem 'devise'
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'
gem 'devise_token_auth', '~> 0.1.37'
gem 'pundit'
gem 'rolify'
gem 'foreman'

group :production, :staging do
  gem 'newrelic_rpm'
  gem 'rails_stdout_logging'
  gem 'rails_serve_static_assets'
  gem 'puma-heroku'
end

group :test, :development do
  gem 'figaro'
  gem 'rspec-rails', '~> 2.0'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'database_cleaner'
  gem 'selenium-webdriver'
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

gem 'mini_racer', platforms: :ruby
