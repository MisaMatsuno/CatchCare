Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :login
  resources :solution
  resources :forum
  resources :designer
  resources :myaccount do
  	member do
  		get 'personal'
  	end
  end
  root 'welcome#index'

end
