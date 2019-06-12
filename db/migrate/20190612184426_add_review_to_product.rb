class AddReviewToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :review, :string
  end
end
