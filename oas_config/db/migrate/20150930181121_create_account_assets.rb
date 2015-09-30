class CreateAccountAssets < ActiveRecord::Migration
  def change
    create_table :account_assets do |t|
      t.integer :asset_list_id
      t.integer :account_id

      t.timestamps null: false
    end
  end
end
