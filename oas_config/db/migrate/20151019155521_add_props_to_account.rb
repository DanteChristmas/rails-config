class AddPropsToAccount < ActiveRecord::Migration
  def change
    change_table "accounts" do |t|
      t.string :facebook_app_id
      t.string :institution_twitter_handle
      t.string :institution_twitter_string
    end
  end
end
