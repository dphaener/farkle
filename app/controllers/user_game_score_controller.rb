class UserGameScoreController < ApplicationController
  def create
    @user_game = UserGame.find(params[:user_game_id])
    @user_game.update(score: @user_game.score + user_score)
  end

  private

  def user_score
    params.dig(:score, :score).to_i
  end
end
