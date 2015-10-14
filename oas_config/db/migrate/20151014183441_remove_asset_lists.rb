class RemoveAssetLists < ActiveRecord::Migration
  def change
    drop_table :asset_lists
    drop_table :account_assets
    drop_table :asset_items
    create_table :account_assets do |t|
      t.integer :asset_id
      t.integer :account_id
      t.integer :account_asset_id

      t.timestamps null: false
    end
  end
end
