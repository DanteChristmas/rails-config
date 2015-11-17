Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :accounts, :assets, :amp_configs, :feature_toggles, :hammer,
    :defaults => {:format => "json"}
  end
end
