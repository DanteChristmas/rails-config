class AddGooglePlusUrlToAccount < ActiveRecord::Migration
  def change
    change_table "accounts" do |t|
      t.string :google_plus_url
      t.string :DN_wall_tag
    end
  end
end
