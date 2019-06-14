class CreateReplies < ActiveRecord::Migration[5.2]
  def change
    create_table :replies do |t|
      t.integer :userID
      t.text :text
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
