class UserGamesController < ApplicationController
  def index
    @user_games = current_user.user_games
  end

  def show
    @user_game = UserGame.find(params[:id])
  end
end
