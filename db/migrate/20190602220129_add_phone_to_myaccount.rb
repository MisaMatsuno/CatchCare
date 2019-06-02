class AddPhoneToMyaccount < ActiveRecord::Migration[5.2]
  def change
    add_column :myaccounts, :phone, :string
  end
end
