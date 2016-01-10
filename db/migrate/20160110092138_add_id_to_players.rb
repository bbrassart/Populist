class AddIdToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :election_id, :integer
  end
end
