class JoinGameController < ApplicationController
  def create
    @game = Game.find(params[:game_id])
    @game.users << current_user
    user_game = @game.user_games.find_by(user: current_user)

    redirect_to user_game_path(user_game)
  end
end
