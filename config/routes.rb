Rails.application.routes.draw do
  get 'resume/index'
  get 'resume/test'

  root 'resume#test'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
