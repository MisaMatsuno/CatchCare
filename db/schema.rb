# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_17_211531) do

  create_table "myaccounts", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "identity"
    t.date "birth"
    t.string "phone"
    t.integer "gender"
    t.string "interest"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "text"
    t.integer "userID"
    t.integer "replyCount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.text "detail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "image"
    t.string "rating"
    t.string "price"
    t.string "category"
    t.string "tag"
    t.string "manufacturer"
    t.string "monthly_sales"
    t.string "review"
    t.string "in_stock"
    t.string "kind"
  end

  create_table "replies", force: :cascade do |t|
    t.integer "userID"
    t.text "text"
    t.integer "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_replies_on_post_id"
  end

  create_table "tips", force: :cascade do |t|
    t.text "message"
    t.string "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
