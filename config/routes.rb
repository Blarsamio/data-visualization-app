Rails.application.routes.draw do
  get 'homepage/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :metrics, only: [:index, :create, :monthly_average]
    end
  end
  root 'homepage#index'
  get 'monthly_average', to: 'api/v1/metrics#monthly_average'
end
