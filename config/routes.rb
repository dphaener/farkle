Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }

  resources :games do
    post :join, to: 'join_game#create'
  end

  resources :user_games, only: %i[index show] do
    post :score, to: 'user_game_score#create'
  end

  root to: redirect('/games')
end
