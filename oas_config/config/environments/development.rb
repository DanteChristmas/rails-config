Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false
  config.serve_static_assets = true

  # Do not eager load code on boot.
  config.eager_load = false

  config.enable_robots = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log
  config.log_formatter = ::Logger::Formatter.new

  # Raise an error on page load if there are pending migrations
  # config.active_record.migration_error = :page_load

  config.serve_full_assets = true

  config.redis_url = "redis://localhost:6379/0"

  config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

end
