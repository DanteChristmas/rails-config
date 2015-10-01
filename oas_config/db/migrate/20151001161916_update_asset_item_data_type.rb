class UpdateAssetItemDataType < ActiveRecord::Migration
  def change
    change_table :asset_items do |t|
      t.remove :asset_list_id
      t.integer :asset_list_id
    end
  end
end
