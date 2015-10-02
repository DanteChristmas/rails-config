
class ApiController < ApplicationController
  protect_from_forgery with: :null_session
  
  def configure_client_caching_override
    @default_cache_time = 10.seconds
  end
end
