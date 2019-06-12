class AddMonthlySalesToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :monthly_sales, :string
  end
end
