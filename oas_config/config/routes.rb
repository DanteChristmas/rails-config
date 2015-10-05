Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :accounts, :assets,
    :defaults => {:format => "json"}
  end
end
