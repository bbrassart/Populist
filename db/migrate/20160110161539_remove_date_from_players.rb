class RemoveDateFromPlayers < ActiveRecord::Migration
  def change
    remove_column :players, :birth_date
  end
end
