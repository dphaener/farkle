class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :winning_score, null: false, default: 10_000
      t.string :title, null: false

      t.timestamps
    end
  end
end
