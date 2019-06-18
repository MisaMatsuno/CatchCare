class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.string :name
      t.string :category
      t.string :price
      t.string :quantity
      t.references :myaccount, foreign_key: true

      t.timestamps
    end
  end
end
