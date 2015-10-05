Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :accounts, :assets, :asset_lists,
    :defaults => {:format => "json"}
  end
end
