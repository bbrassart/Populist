class AddVotestoPlayers < ActiveRecord::Migration
  def change
    add_column :players, :votes, :integer
  end
end
