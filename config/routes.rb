Rails.application.routes.draw do
  root to: redirect('/games')

  devise_for :users
  resources :users

  resources :games do
    post :join, to: 'join_game#create'
  end

  resources :user_games, only: %i[index show] do
    post :score, to: 'user_game_score#create'
  end
end
