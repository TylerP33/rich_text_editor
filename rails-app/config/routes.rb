Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :documents, only: [:new, :index, :create, :update, :show]  
    end
  end
end