class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :text
      t.integer :userID
      t.integer :replyCount

      t.timestamps
    end
  end
end
