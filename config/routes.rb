Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :login
  resources :solution
  resources :forum do
    member do
      get 'postdetail'
    end
  end
  resources :designer
  resources :cart do
    member do
  		get 'mycart'
  	end
  end
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
  resources :posts do
    resources :comments
  end
  resources :tips
  resources :replies
  resources :addreply
  root 'welcome#index'

end
