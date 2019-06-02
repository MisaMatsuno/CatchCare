class RemoveTypeFromMyaccount < ActiveRecord::Migration[5.2]
  def change
    remove_column :myaccounts, :type, :string
  end
end
