class AddDefaultToUserGameScore < ActiveRecord::Migration[6.1]
  def change
    change_column_default :user_games, :score, from: nil, to: 0
  end
end
