class AddAssetTypeToAssetList < ActiveRecord::Migration
  def change
    change_table :asset_lists do |t|
      t.remove :type
      t.string :asset_type
    end
  end
end
