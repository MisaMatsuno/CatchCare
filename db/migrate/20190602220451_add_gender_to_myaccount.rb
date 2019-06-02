class AddGenderToMyaccount < ActiveRecord::Migration[5.2]
  def change
    add_column :myaccounts, :gender, :TinyINT
  end
end
