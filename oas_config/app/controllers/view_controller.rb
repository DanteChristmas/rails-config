class ViewController < ApplicationController
  before_action :populate_models

  def populate_models
    @user = current_user
  end

  def not_found_title
    "OAS CMS thing of destiny | Page Not Found"
  end

  def title
    "Da OAS CMS thing of destiny"
  end
end
