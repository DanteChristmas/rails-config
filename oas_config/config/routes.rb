Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  namespace :api do
    resources :accounts, :assets, :amp_configs, :feature_toggles, :hammer,
    :defaults => {:format => "json"}
  end
end
