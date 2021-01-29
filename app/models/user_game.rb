class UserGame < ApplicationRecord
  belongs_to :user
  belongs_to :game

  after_create_commit -> { broadcast_append_to game }
  after_update_commit -> { broadcast_replace_to game }
end
