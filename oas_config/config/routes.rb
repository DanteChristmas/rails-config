Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :accounts, :assets, :amp_configs,
    :defaults => {:format => "json"}
  end
end
