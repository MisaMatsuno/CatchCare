class AddBirthToMyaccount < ActiveRecord::Migration[5.2]
  def change
    add_column :myaccounts, :birth, :date
  end
end
