class AddInStockToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :in_stock, :string
  end
end
