Rails.application.routes.draw do
  resources :posts, except: [:show, :index]
  resources :board, except: [:show, :update] do
    resources :posts, only: [ :create]
  end

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
