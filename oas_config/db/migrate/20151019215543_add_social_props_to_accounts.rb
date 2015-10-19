class AddSocialPropsToAccounts < ActiveRecord::Migration
  def change
    change_table "accounts" do |t|
      t.string :facebook_url
      t.string :twitter_url
      t.string :instagram_url
      t.string :youtube_url
      t.string :pinterest_url
    end
  end
end
