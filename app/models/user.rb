class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_games, dependent: :destroy
  has_many :games, through: :user_games
end
