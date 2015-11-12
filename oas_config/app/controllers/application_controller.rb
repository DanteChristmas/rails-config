class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :configure_client_caching
  after_filter :set_crsf_token_for_ng

  def configure_client_caching
    expires_in @cache_time || @default_cache_time, public: true, must_revalidate: @must_revalidate
  end


  def set_crsf_token_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_param if protect_against_forgery?
  end

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

protected

  def verified_request?
    super || form_authenticity_param == request.headers['X-XSRF-TOKEN']
  end
end
