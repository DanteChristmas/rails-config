class AddFullBustToAccount < ActiveRecord::Migration
  def change
    change_table "accounts" do |t|
      t.boolean :full_cache_bust
    end
  end
end
