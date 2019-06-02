class AddInterestToMyaccount < ActiveRecord::Migration[5.2]
  def change
    add_column :myaccounts, :interest, :string
  end
end
