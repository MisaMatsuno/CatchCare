class AddIdentityToMyaccount < ActiveRecord::Migration[5.2]
  def change
    add_column :myaccounts, :identity, :string
  end
end
