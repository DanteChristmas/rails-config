class CreateAssetItems < ActiveRecord::Migration
  def change
    create_table :asset_items do |t|
      t.integer :asset_id
      t.integer :asset_list_id
      t.integer :asset_item_id

      t.timestamps null: false
    end
  end
end
