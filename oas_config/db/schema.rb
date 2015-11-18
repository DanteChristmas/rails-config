# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20151118180120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_assets", force: :cascade do |t|
    t.integer  "asset_id"
    t.integer  "account_id"
    t.integer  "account_asset_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "accounts", force: :cascade do |t|
    t.string   "org_code"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "google_analytics_key"
    t.string   "google_search_key"
    t.string   "dfp_path_prefix"
    t.string   "ooyala_video_player_id"
    t.string   "ooyala_audio_player_id"
    t.string   "ooyala_ad_set_codes"
    t.string   "platform_name"
    t.string   "copyright"
    t.string   "publication_name"
    t.integer  "amp_config_id"
    t.string   "facebook_app_id"
    t.string   "institution_twitter_handle"
    t.string   "institution_twitter_string"
    t.string   "default_tickets_link"
    t.string   "media_byline"
    t.string   "facebook_url"
    t.string   "twitter_url"
    t.string   "instagram_url"
    t.string   "youtube_url"
    t.string   "pinterest_url"
    t.string   "google_plus_url"
    t.string   "DN_wall_tag"
    t.boolean  "full_cache_bust"
  end

  create_table "amp_configs", force: :cascade do |t|
    t.string   "name"
    t.string   "org_type"
    t.string   "org_code"
    t.string   "api_key"
    t.string   "endpoint_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "assets", force: :cascade do |t|
    t.string   "version"
    t.string   "url"
    t.datetime "script_created"
    t.datetime "script_last_modified"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "component_name"
    t.string   "asset_type"
    t.string   "file_name"
  end

  create_table "feature_toggles", force: :cascade do |t|
    t.boolean  "robots",     default: false
    t.boolean  "paywall",    default: false
    t.boolean  "sitemap",    default: false
    t.integer  "account_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
