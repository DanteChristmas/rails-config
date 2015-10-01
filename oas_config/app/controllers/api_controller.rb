
class ApiController < ApplicationController
  def configure_client_caching_override
    @default_cache_time = 10.seconds
  end
end
