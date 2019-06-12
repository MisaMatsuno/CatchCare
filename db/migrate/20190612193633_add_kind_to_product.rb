class AddKindToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :kind, :string
  end
end
