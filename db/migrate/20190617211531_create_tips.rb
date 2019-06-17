class CreateTips < ActiveRecord::Migration[5.2]
  def change
    create_table :tips do |t|
      t.text :message
      t.string :rating

      t.timestamps
    end
  end
end
