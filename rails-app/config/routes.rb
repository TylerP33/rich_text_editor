Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :documents
    end
  end

    get "/user_defined_search", to: "documents#used_defined_search", as: "documents/user_defined_search"
end