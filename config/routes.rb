Rails.application.routes.draw do
  get 'resume/index'
  get 'resume/test'
  get 'contact' => 'contact#index'

  resources :portfolio

  root 'resume#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
