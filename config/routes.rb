Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :login
  resources :solution
  resources :forum
  resources :designer
  resources :cart
  resources :myaccount do
  	member do
  		get 'personal'
  	end
  end
  resources :products do
    member do
      get 'detail'
    end
  end

  resources :posts
  root 'welcome#index'

end
