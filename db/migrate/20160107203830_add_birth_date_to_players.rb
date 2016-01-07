class AddBirthDateToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :birth_date, :date
  end
end
